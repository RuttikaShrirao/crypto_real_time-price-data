const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  trackedSymbol: { type: String, required: true }
});

module.exports = mongoose.model('Setting', settingSchema);
