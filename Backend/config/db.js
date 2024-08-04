const mongoose  = require("mongoose");
require ("dotenv").config(); 
const mongoURL = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL)
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
