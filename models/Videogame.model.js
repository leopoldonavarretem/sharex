
const { Schema, model } = require("mongoose");

const videogameSchema = new Schema(
  {
  },
  {
    timestamps: true,
  }
);

module.exports = model('Videogame', videogameSchema)