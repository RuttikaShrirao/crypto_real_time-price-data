const Setting = require('../models/Setting');

exports.updateTrackedSymbol = async (req, res) => {
  try {
    const { symbol } = req.body;
    await Setting.findOneAndUpdate({}, { trackedSymbol: symbol.toUpperCase() }, { upsert: true });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error updating tracked symbol' });
  }
};

exports.getTrackedSymbol = async (req, res) => {
  try {
    const setting = await Setting.findOne();
    res.json(setting.trackedSymbol);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tracked symbol' });
  }
};
