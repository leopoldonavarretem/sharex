// Imports
const { Schema, model } = require("mongoose");

const albumSchema = new Schema(
  {
    albumName: {
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

    artist: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String
    },
  },

  {
    timestamps: true,
  }
);

module.exports = model("Album", albumSchema);