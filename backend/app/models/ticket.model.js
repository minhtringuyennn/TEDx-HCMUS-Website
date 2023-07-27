module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      email: String,
      phone: String,
      screenshot: String,
      seatIds: Array,
      transactionId: String,
      status: String,
      otp: String,
      otpExpired: Number,
      otpRetry: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, otp, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Ticket = mongoose.model("ticket", schema);
  return Ticket;
};