// Imports
const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    movieName: {
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

    director: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String
    },

    likes: {
      type: Number,
    }
  },

  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);