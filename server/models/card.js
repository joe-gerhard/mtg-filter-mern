const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  artist: String,
  colorIdentity: [String],
  colors: [String],
  convertedManaCost: Number,
  flavorText: String,
  imageUrl: String,
  layout: String,
  legalities: Object,
  manaCost: String,
  multiverseId: Number,
  name: String,
  number: String,
  rarity: String,
  set: String,
  subtypes: [String],
  supertypes: [String],
  text: String,
  type: String,
  types: [String],
});

module.exports = mongoose.model('Card', cardSchema);