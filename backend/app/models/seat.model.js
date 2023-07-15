const { INIT_SEAT } = require("./seat.mplex.init.js");
const { SEAT_STATUS, SEAT_TYPE } = require("../common/constants");

module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      _id: String,
      seatId: String,
      seatType: String,
      seatPrice: Number,
      seatStatus: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Seat = mongoose.model("seat", schema);

  INIT_SEAT.forEach((row) => {
    row.forEach(({ seatId, price }) => {
      Seat.findById(seatId).then((data) => {
        if (!data) {
          const seat = new Seat({
            _id: seatId,
            seatId,
            seatType: SEAT_TYPE.STANDARD.key,
            seatPrice: SEAT_TYPE.STANDARD.price,
            seatStatus: SEAT_STATUS.AVAILABLE,
          });

          seat
            .save(seat)
            .then((data) => {
              console.log(`Seat ${seatId} was created successfully!`);
            })
            .catch((err) => {
              console.error(`Seat ${seatId} was created failed!`, err);
            });
        }
      });
    });
  });

  return Seat;
};
