module.exports = (app) => {
  const bank = require("../controllers/bank.controller.js");

  var router = require("express").Router();

  // Set refresh token
  router.post("/credential", bank.setCredential);

  // Retrieve all transactional information
  router.get("/transactions", bank.findAllTransactions);

  app.use(`/bank`, router);
};
