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

exports.updateSystemField = async (req, res) => {
  const { key, value } = req.body;

  try {
    if (!key || !value) {
      return res.status(400).json({ success: false, message: "Invalid or blank key or value!" });
    }

    if (key === "sessionApiKey") {
      return res.status(400).json({ success: false, message: "Cannot update sessionApiKey!" });
    }

    const collectionKeys = Object.keys(System.schema.paths);
    if (!collectionKeys.includes(key)) {
      return res.status(400).json({ success: false, message: "Invalid key!" });
    }

    const updatedSystem = await System.findOneAndUpdate(
      { _id: DB_KEY.SYSTEM },
      { [key]: value },
      { new: true, useFindAndModify: false }
    );

    if (!updatedSystem) {
      return res.status(404).json({ success: false, message: "System not found!" });
    }

    return res.json({ success: true, message: "System updated successfully.", data: updatedSystem });
  } catch (err) {
    console.error("Error updating System:", err);
    return res.status(500).json({ success: false, message: "An error occurred while updating the System." });
  }
};
