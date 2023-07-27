
module.exports = (app) => {
  const ticket = require("../controllers/ticket.controller.js");

  var router = require("express").Router();

  // Create a new Ticket
  router.post("/", ticket.createTicket);

  // Retrieve from transactionId
  router.get("/:transactionId", ticket.getTicketByTransactionId);

  // updateTicketStatus from transactionId
  router.patch("/:transactionId", ticket.updateTicketStatus);

  app.use(`/ticket`, router);
};
