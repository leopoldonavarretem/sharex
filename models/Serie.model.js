// Imports
const { Schema, model } = require("mongoose");

const seriesModel = new Schema(
  {
    serieName: {
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

    network: {
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

module.exports = model('Serie', seriesModel);