
const { Schema, model } = require("mongoose");


const movieSchema = new Schema(
  {
  },
  {
    timestamps: true,
  }
);


module.exports = model("Movie", movieSchema);