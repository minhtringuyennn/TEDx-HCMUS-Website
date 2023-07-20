require("dotenv").config();

const express = require("express");
const cron = require("node-cron");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { spawn } = require("child_process");

const { DB_NAME } = require("./app/config/db.config.js");
const db = require("./app/models");
const { TRIGGER_REFRESH_TIME, TRIGGER_CRON_JOB, DB_KEY, TRIGGER_BACKUP_DB } = require("./app/common/constants.js");
const { setCredentialIntoDB, refreshCredential } = require("./app/common/helpers.js");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const System = db.system;
const Seat = db.seat;
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
require("./app/routes/ticket.routes")(app);
require("./app/routes/system.routes")(app);

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

const generateAPIKey = async () => {
  // const key = uuidv4().replace(/-/g, "");
  const key = "TEDXHCMUS_TICKET_SYSTEM_150723";
  console.log("SESSION API KEY IS: ", key);

  const salt = await bcrypt.genSalt(10);
  const encryptedKey = await bcrypt.hash(key, salt);
  return { encryptedKey };
};

generateAPIKey().then((data) => {
  const { encryptedKey } = data;
  System.findOneAndUpdate({}, { sessionApiKey: encryptedKey }, { new: true, useFindAndModify: false })
    .then((data) => {
      console.log("API_KEY updated");
    })
    .catch((err) => {
      console.error("Error when updating api_key: ", err);
    });
});

// Refresh token every 30 seconds
cron.schedule(TRIGGER_CRON_JOB, async () => {
  try {
    console.log("Running cron job to refresh token...");

    const current_time = Date.now();

    const system = await System.findOne();

    System.findOne({
      _id: DB_KEY.SYSTEM,
    })
      .then((data) => {
        if (data.lastDBBackup < Date.now() - TRIGGER_BACKUP_DB) {
          console.log("Backup database");

          // Backup database
          const BACKUP_PATH = `./db/backup/${Date.now()}`;

          const backupProcess = spawn(
            "mongodump",
            [`--uri=${db.url}`, `--db=${DB_NAME}`, `--archive=${BACKUP_PATH}`, "--gzip"],
            {
              shell: true,
            }
          );

          console.log("Backup process started...", backupProcess.pid, backupProcess.spawnargs);

          backupProcess.stderr.on("data", (data) => {
            console.log(`Backup process: ${data}`);
          });

          backupProcess.on("exit", (code, signal) => {
            if (code) console.log("Backup process exited with code ", code);
            else if (signal) console.error("Backup process was killed with singal ", signal);
            else {
              console.log(`Successfully backedup the database at ${BACKUP_PATH}`);
              System.findOneAndUpdate(
                { _id: DB_KEY.SYSTEM },
                {
                  lastDBBackup: Date.now(),
                },
                { new: true, useFindAndModify: false }
              )
                .then(() => {
                  console.log("System updated");
                })
                .catch((err) => {
                  console.error("Error when updating system: ", err);
                });
            }
          });
        }
      })
      .catch((err) => {
        console.error("Error when getting lastDBBackup: ", err);
      });

    const { bankVerifyStatus } = system;
    if (!bankVerifyStatus) {
      console.error("Bank Verify Status is down! Skip refreshing token...");
      return;
    }

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
          console.error("Error when updating credential: ", err);
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
