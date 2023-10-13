// Imports
const { Schema, model } = require("mongoose");

const mediaSchema = new Schema(
  {
    mediaName: {
      type: String,
      required: [true, 'Media name is required']
    },

    description: {
      type: String,
      required: [true, 'Description is required']
    },

    genre: {
      type: String,
      required: [true, 'Genre is required.']
    },

    year: {
      type: Number,
      required: [true, 'Year is required.'],
      min: 0,
      max: 2050
    },

    creator: {
      type: String,
      required: [true, 'Creator is required.']
    },

    imageUrl: {
      type: String,
      required: [true, 'Image is required.']
    },

    mediaType:{
      type: String,
      enum: ['Book', 'Videogame', 'Serie', 'Movie', 'Album'],
      required: [true, 'Media type is required.']
    },
 },

  {
    timestamps: true,
  }
);

module.exports = model("Media", mediaSchema);