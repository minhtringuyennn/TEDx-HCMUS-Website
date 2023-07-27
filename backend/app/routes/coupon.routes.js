module.exports = (app) => {
  const ticket = require("../controllers/coupon.controller.js");

  var router = require("express").Router();

  // Create a new Coupon
  router.post("/", coupon.createCoupon);

  // Retrieve from Coupon ID
  router.get("/:transactionId", ticket.getTicketByTransactionId);

  // updateTicketStatus from transactionId
  router.patch("/:transactionId", ticket.updateTicketStatus);

  app.use(`/coupon`, router);
};
