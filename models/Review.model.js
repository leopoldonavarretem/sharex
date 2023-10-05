// Imports
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user_Id: {
      type: String,
      unique: false
    },

    externalId: {
      type: String,
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