// Imports
const { Schema, model } = require("mongoose");

const mediaSchema = new Schema(
  {
    mediaName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    creator: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String
    },

    mediaType:{
      type: String
    }
  },

  {
    timestamps: true,
  }
);

module.exports = model("Media", mediaSchema);