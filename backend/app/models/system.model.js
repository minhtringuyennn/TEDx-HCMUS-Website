module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      _id: String,
      availableSeats: Array,
      bookedSeats: Array,
      reservedSeats: Array,
      bankVerifyStatus: Boolean,
      bankAccount: String,
      bankAccountName: String,
      lastDBBackup: Date,
      sessionApiKey: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const System = mongoose.model("system", schema);

  System.findById("server_system").then((data) => {
    if (!data) {
      const system = new System({
        _id: "server_system",
        availableSeats: [],
        bookedSeats: [],
        reservedSeats: [],
        bankVerifyStatus: false,
        bankAccount: "",
        bankAccountName: "",
        lastDBBackup: new Date(),
        sessionApiKey: "",
      });

      system
        .save(system)
        .then((data) => {
          console.log(`System was created successfully!`);
        })
        .catch((err) => {
          console.log(`System was created failed!`, err);
        });
    }
  });

  return System;
};
