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
  return BankTransaction;
};
