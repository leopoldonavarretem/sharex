const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user_Id: {
      type: String,
      unique: false
    },

    media_Id: {
      type: Schema.Types.ObjectId,
      ref: "Media",
      unique: false
    },
 
    review: {
      type: String,
    },

    calification: {
      type: Number,
    },

    like: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Review", reviewSchema);
