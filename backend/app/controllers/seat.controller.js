const db = require("../models");
const { DB_KEY } = require("../common/constants.js");

const System = db.system;

exports.getSystemStatus = (req, res) => {
  System.findOne({ _id: DB_KEY.SYSTEM })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ success: false, message: "System not found!" });
      }

      return res.json({ success: true, data });
    })
    .catch((err) => {
      console.error("Error retrieving System:", err);
      return res.status(500).json({ success: false, message: "An error occurred while retrieving the System." });
    });
};
