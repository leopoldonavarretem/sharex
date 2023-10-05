// Imports
const { Schema, model } = require("mongoose");

const seriesModel = new Schema(
  {
  },
  {
    timestamps: true,
  }
);

module.exports = model('Serie', seriesModel);