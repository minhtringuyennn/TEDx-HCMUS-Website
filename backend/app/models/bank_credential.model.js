module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      _id: String,
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

  BankCredential.findById("bank_credential").then((data) => {
    if (!data) {
      const bankCredential = new BankCredential({
        _id: "bank_credential",
        refresh_token: "",
        access_token: "",
        expire_time: 0,
      });

      bankCredential
        .save(bankCredential)
        .then((data) => {
          console.log(`Bank Credential was created successfully!`);
        })
        .catch((err) => {
          console.log(`Bank Credential was created failed!`, err);
        });
    }
  });

  return BankCredential;
};
