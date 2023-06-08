const axios = require("axios");
const dayjs = require("dayjs");

const db = require("../models");
const { setCredentialIntoDB, refreshCredential } = require("../common/helpers.js");
const { DEFAULT_EXPIRE_TIME, TRIGGER_REFRESH_TIME } = require("../common/constants.js");

const BankCredential = db.bank_credential;
const BankTransaction = db.bank_transaction;

exports.setCredential = (req, res) => {
  const { refresh_token, access_token } = req.body;
  const expire_time = Date.now() + DEFAULT_EXPIRE_TIME;

  const credential = {
    refresh_token: refresh_token,
    access_token: access_token,
    expire_time: expire_time,
  };

  setCredentialIntoDB(credential)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};

exports.findAllTransactions = async (req, res) => {
  try {
    const access_token = await updateCredential();
    const queryTransactions = await fetchTransactions(access_token, req.query);
    res.send(queryTransactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

async function updateCredential() {
  const latestCredential = await BankCredential.findOne().sort({ _id: -1 });

  const { refresh_token, access_token, expire_time } = latestCredential;
  const now = Date.now();
  if (now > expire_time + TRIGGER_REFRESH_TIME) {
    try {
      const updatedCredential = await refreshCredential(refresh_token);
      await setCredentialIntoDB(updatedCredential);
      return updatedCredential.access_token;
    } catch (error) {
      console.log("Error when updating credential: ", error);
      throw new Error("An error occurred during token refresh.");
    }
  } else {
    return access_token;
  }
}

async function fetchTransactions(access_token, query) {
  const apiUrl = "https://onlinebanking.techcombank.com.vn/api/transaction-manager/client-api/v2/transactions";
  const { bookingDateGreaterThan, bookingDateLessThan, categories, from, size, orderBy, direction } = query;

  const params = {
    bookingDateGreaterThan: bookingDateGreaterThan || dayjs().subtract(1, "month").format("YYYY-MM-DD"),
    bookingDateLessThan: bookingDateLessThan || dayjs().add(1, "day").format("YYYY-MM-DD"),
    categories: categories || "Income",
    from: from || "0",
    size: size || "500",
    orderBy: orderBy || "bookingDate",
    direction: direction || "DESC",
  };

  const headers = {
    Cookie: `Authorization=${access_token}`,
  };

  try {
    const response = await axios.get(apiUrl, { params, headers });
    const transactions = response.data;
    const transactionsToSave = transactions.map((transaction) => {
      const { id: _id, description, bookingDate, transactionAmountCurrency, runningBalance, category } = transaction;
      return { _id, description, bookingDate, transactionAmountCurrency, runningBalance, category };
    });

    const updatePromises = transactionsToSave.map(async (transaction) => {
      try {
        await BankTransaction.updateOne({ _id: transaction._id }, transaction, { upsert: true });
      } catch (error) {
        if (error.code === 11000) {
          console.log(`Duplicate key error for document with _id: ${transaction._id}`);
        } else {
          console.error(error);
        }
      }
    });

    await Promise.all(updatePromises);

    return transactionsToSave;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred");
  }
}
