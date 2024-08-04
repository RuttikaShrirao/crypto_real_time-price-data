const express = require('express');
const connectDB = require('./config/db');
const stockRoutes = require('./routes/stockRoutes');
const settingRoutes = require('./routes/settingRoutes');

require('dotenv').config();
const cors = require('cors');

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
require('./services/dataPoller');

app.use('/api/stocks', stockRoutes);
app.use('/api/setting', settingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
