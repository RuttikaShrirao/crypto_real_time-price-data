const Stock = require('../models/Stock');

exports.getRecentStockData = async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const stockData = await Stock.find({ stock_name:symbol },
      {stock_name: 1, price: 1, timestamp: 1}).sort({ timestamp: -1 }).limit(20);
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stock data' });
  }
};


// exports.getStocksList = async (req, res) => {
//   try {  
//     const options = {
//       method: 'GET',
//       headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-jQRa5k6aW4XV42LkU9HNynmL'}
//     };
    
//     fetch('https://api.coingecko.com/api/v3/coins/list', options)
//       .then(response => response.json())
//       .then(response => {
//           res.json(response)
//           return response
//         }
//         ).catch(err => console.error(err));
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching stock data' });
//   }
// };

