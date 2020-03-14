const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const setSchema = new Schema({
  code: String,
  name: String,
  releaseDate: String,
  totalSetSize: Number,
  type: String,
});

module.exports = mongoose.model('Set', setSchema);