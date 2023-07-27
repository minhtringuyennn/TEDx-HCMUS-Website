const ensurePermissions = require("../middlewares/ensurePermissions.js");

module.exports = (app) => {
  const system = require("../controllers/system.controller.js");

  var router = require("express").Router();

  // Get system info
  router.get("/info", system.getSystemStatus);

  // Patch system info
  router.patch("/info", system.updateSystemField);

  app.use(`/system`, ensurePermissions(), router);
};
