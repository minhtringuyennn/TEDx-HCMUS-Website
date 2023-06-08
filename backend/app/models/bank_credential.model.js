module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      refresh_token: String,
      access_token: String,
      expire_time: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const BankCredential = mongoose.model("bank_credential", schema);
  return BankCredential;
};
