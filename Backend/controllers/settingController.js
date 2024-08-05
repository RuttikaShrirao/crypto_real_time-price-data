const Stock = require('../models/Stock');

exports.updateTrackedSymbol = async (req, res) => {
  try {
    const { symbol } = req.body;
    await Setting.findOneAndUpdate({}, { trackedSymbol: symbol }, { upsert: true });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error updating tracked symbol' });
  }
};

exports.getTrackedSymbol = async (req, res) => {
  try {
    const Stock = await Stock.findOne();
    console.log(Stock,"kjjk")
    // res.json(Stock.trackedSymbol);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tracked symbol' });
  }
};
