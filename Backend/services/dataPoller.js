const axios = require('axios');
const Stock = require('../models/Stock');
const Setting = require('../models/Setting');

const pollData = async () => {
  try {
    const coins= [ 'bitcoin','ethereum','dogecoin','matic-network','decentraland']
    console.log("running")
    // CoinGecko API
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
      params: {
        ids: coins.join(","),
        precision:'full',
        vs_currencies: 'inr',
      },
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-jQRa5k6aW4XV42LkU9HNynmL'}
    });

    console.log(response.data.bitcoin,"responseeeeeeee12")
     Stock.insertMany([{stock_name:'bitcoin', price:response.data.bitcoin.inr},
      {stock_name:'decentraland', price:response.data.decentraland.inr},
      {stock_name:'dogecoin', price:response.data.dogecoin.inr},
      {stock_name:'ethereum', price:response.data.ethereum.inr},
      {stock_name:'matic-network', price:response.data['matic-network'].inr}
    ])

  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
};

// setInterval(pollData, 5000); // Poll every 5 seconds
module.exports = pollData;