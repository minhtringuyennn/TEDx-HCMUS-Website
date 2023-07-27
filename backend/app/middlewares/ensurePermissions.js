const bcrypt = require("bcrypt");

const db = require("../models");
const System = db.system;

const { DB_KEY } = require("../common/constants.js");

const ensurePermissions = () => async (req, res, next) => {
  const passedKey = req.headers["x-api-key"];

  try {
    if (!passedKey) {
      return res.status(401).json({ success: false, message: "No key provided", code: 401 });
    }

    const system = await System.findOne({ _id: DB_KEY.SYSTEM });

    if (!system) {
      return res.status(401).json({ success: false, message: "System has not been initialized", code: 401 });
    }

    const { sessionApiKey } = system;

    if (!sessionApiKey) {
      return res
        .status(401)
        .json({ success: false, message: "System session API key has not been initialized", code: 401 });
    }

    const isMatch = await bcrypt.compare(passedKey, sessionApiKey);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Key does not match", code: 401 });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Internal server error", code: 500 });
  }
};

module.exports = ensurePermissions;
