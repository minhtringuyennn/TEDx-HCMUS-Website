require("dotenv").config();

const express = require("express");
const cron = require("node-cron");

const db = require("./app/models");
const { TRIGGER_REFRESH_TIME, TRIGGER_CRON_JOB } = require("./app/common/constants.js");
const { setCredentialIntoDB, refreshCredential } = require("./app/common/helpers.js");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const BankCredential = db.bank_credential;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

console.log("db.url: ", db.url);

// Test route
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

require("./app/routes/bank.routes")(app);

// list all available routes
function print(path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
  } else if (layer.name === "router" && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
  } else if (layer.method) {
    console.log("%s /%s", layer.method.toUpperCase(), path.concat(split(layer.regexp)).filter(Boolean).join("/"));
  }
}

function split(thing) {
  if (typeof thing === "string") {
    return thing.split("/");
  } else if (thing.fast_slash) {
    return "";
  } else {
    var match = thing
      .toString()
      .replace("\\/?", "")
      .replace("(?=\\/|$)", "$")
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
    return match ? match[1].replace(/\\(.)/g, "$1").split("/") : "<complex:" + thing.toString() + ">";
  }
}

app._router.stack.forEach(print.bind(null, []));

// Refresh token every 30 seconds
cron.schedule(TRIGGER_CRON_JOB, async () => {
  try {
    console.log("Running cron job to refresh token...");

    const current_time = Date.now();

    const latestRecord = await BankCredential.findOne().sort({ _id: -1 });
    const { refresh_token, expire_time } = latestRecord;

    // Check if the expire_time is under 1 minute from the current time
    if (expire_time - current_time < TRIGGER_REFRESH_TIME) {
      const updatedCredential = await refreshCredential(refresh_token);
      console.log("Updated credential: ", updatedCredential);

      setCredentialIntoDB(updatedCredential)
        .then((data) => {
          console.log("Updated credential: ", data);
        })
        .catch((err) => {
          console.log("Error when updating credential: ", err);
        });
    }
  } catch (error) {
    console.error("An error occurred during token refresh:", error);
  }
});

// Set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
