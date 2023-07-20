module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      coupons: [
        {
          id: String,
          name: String,
          discount: {
            amount: Number,
            type: String,
          },
          quantity: Number,
          expiredAt: Number,
        },
      ],
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Coupon = mongoose.model("coupon", schema);
  return Coupon;
};
