const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.bank_credential = require("./bank_credential.model.js")(mongoose);
db.bank_transaction = require("./bank_transaction.model.js")(mongoose);

module.exports = db;
