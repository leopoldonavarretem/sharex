// Imports
const { Schema, model, default: mongoose } = require("mongoose");

const reviewSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User Id is required']
    },

    mediaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Media',
      required: [true, 'Media Id is required']
    },
 
    review: {
      type: String,
      required: [true, 'Review text is required.'],
      minLength: 30,
      maxLength: 350
    },

    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 0,
      max: 5
    },

    like: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Review", reviewSchema);