
const { Schema, model } = require("mongoose");

const videogameSchema = new Schema(
  {
    videogameName: {
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

    developer: {
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

module.exports = model('Videogame', videogameSchema)