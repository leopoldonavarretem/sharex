// Imports
const { Schema, model, default: mongoose } = require("mongoose");

const reviewSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

    externalId: {
      type: String,
    },
 
    review: {
      type: String,
    },

    rating: {
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