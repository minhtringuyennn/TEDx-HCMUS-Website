module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      _id: String,
      description: String,
      bookingDate: Date,
      transactionAmountCurrency: {
        amount: Number,
        currencyCode: String,
      },
      runningBalance: Number,
      category: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const BankTransaction = mongoose.model("bank_transaction", schema);

  BankTransaction.findById("bank_transaction").then((data) => {
    if (!data) {
      const bankTransaction = new BankTransaction({
        _id: "bank_transaction",
        description: "",
        bookingDate: new Date(),
        transactionAmountCurrency: {
          amount: 0,
          currencyCode: "",
        },
        runningBalance: 0,
        category: "",
      });

      bankTransaction
        .save(bankTransaction)
        .then((data) => {
          console.log(`Bank Transaction was created successfully!`);
        })
        .catch((err) => {
          console.log(`Bank Transaction was created failed!`, err);
        });
    }
  });

  return BankTransaction;
};
