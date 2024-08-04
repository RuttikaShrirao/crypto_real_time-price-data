const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  stock_name: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stock', stockSchema);
