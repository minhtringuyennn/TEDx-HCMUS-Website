const crc32 = require("crc").crc32;
const _ = require("lodash");

const { TICKET_STATUS, SEAT_STATUS } = require("../common/constants");
const db = require("../models");

const Ticket = db.ticket;
const Seat = db.seat;

exports.createTicket = async (req, res) => {
  try {
    const { name, email, phone, seatIds } = req.body;
    if (_.isEmpty(name) || _.isEmpty(email) || _.isEmpty(phone) || _.isEmpty(seatIds)) {
      return res.status(400).send({ message: "Content cannot be empty!" });
    }

    // Validate inputs
    if (!isValidEmail(email)) {
      return res.status(400).send({ message: "Invalid email format!" });
    }

    if (!_.isString(phone)) {
      return res.status(400).send({ message: "Invalid phone format!" });
    }

    // Check if seats are valid
    const isSeatValid = await isValidSeats(seatIds);
    if (!isSeatValid) {
      return res.status(400).send({ message: "Invalid seat(s)!" });
    }

    // Generate transaction ID
    const transactionId = generateTransactionId(name, email, phone, seatIds);

    // Create the ticket object
    const ticket = new Ticket({
      name,
      email,
      phone,
      seatIds,
      transactionId,
      status: TICKET_STATUS.PENDING,
    });

    // Save the ticket and update seats in parallel
    const [savedTicket] = await Promise.all([ticket.save(), updateSeats(seatIds)]);

    return res.send({
      message: "Ticket created successfully!",
      transactionId: savedTicket.transactionId,
      qrCode: generateQRCode(savedTicket.transactionId),
    });
  } catch (err) {
    console.error("Error creating ticket:", err);
    return res.status(500).send({
      message: "An error occurred while creating the ticket.",
    });
  }
};

exports.getTicketByTransactionId = (req, res) => {
  const { transactionId } = req.params;
  if (!transactionId) {
    return res.status(400).send({ message: "TransactionId cannot be empty!" });
  }

  Ticket.findOne({ transactionId })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Ticket not found for transactionId: " + transactionId });
      }

      return res.send(data);
    })
    .catch((err) => {
      console.error("Error retrieving Ticket:", err);
      return res.status(500).send({
        message: "An error occurred while retrieving the Ticket.",
      });
    });
};

exports.updateTicketStatus = (req, res) => {
  const { transactionId } = req.params;
  const { status } = req.body;
  if (!transactionId) {
    return res.status(400).send({ message: "TransactionId cannot be empty!" });
  }

  Ticket.findOneAndUpdate({ transactionId }, { status }, { new: true, useFindAndModify: false })
    .then((updatedTicket) => {
      if (!updatedTicket) {
        return res.status(404).send({ message: "Ticket not found for transactionId: " + transactionId });
      }

      return res.send({ message: "Ticket updated successfully.", ticket: updatedTicket });
    })
    .catch((err) => {
      console.error("Error updating Ticket:", err);
      return res.status(500).send({
        message: "An error occurred while updating the Ticket.",
      });
    });
};

function isValidEmail(email) {
  return _.isString(email) && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

async function isValidSeats(seatIds) {
  try {
    const seatPromises = seatIds.map((seatId) => Seat.findById(seatId));
    const seatData = await Promise.all(seatPromises);

    return seatData.every((data) => data && data.seatStatus === SEAT_STATUS.AVAILABLE);
  } catch (error) {
    console.error("Error validating seats:", error);
    return false;
  }
}

function generateTransactionId(name, email, phone, seatIds) {
  const sortedSeatIds = seatIds.sort().join(",");
  const hash = crc32(name + email + phone + sortedSeatIds).toString(16);
  return `txus${hash}`;
}

async function updateSeats(seatIds) {
  const updatePromises = seatIds.map((seatId) => {
    return Seat.findByIdAndUpdate(seatId, { seatStatus: SEAT_STATUS.RESERVED }, { useFindAndModify: false });
  });
  return Promise.all(updatePromises);
}

function generateQRCode(transactionId) {
  return `https://api.vieqr.com/vietqr/Techcombank/121001101002/5000/full.jpg?NDck=${transactionId}`;
}
