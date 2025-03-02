# crypto_real_time-price-data

## Description

This is a mini-website that collects and displays real-time price data for selected stocks or cryptocurrencies. The application consists of a backend that polls real-time data from an API and stores it in a MongoDB database, and a frontend that dynamically displays the most recent data entries in a table.


### Features

- **Backend**:
  - Polls real-time data every few seconds for 5 stocks or cryptocurrencies.
  - Stores the data in a MongoDB database.
  
- **Frontend**:
  - Fetches the most recent 20 real-time data entries from the MongoDB database for a particular stock or cryptocurrency.
  - Displays the data in a dynamically updating table.
  - Includes a button to open a modal/popup that allows the user to change the stock or cryptocurrency being tracked.

### Getting Started

- **Installation**:
 git clone https://github.com/RuttikaShrirao/crypto_real_time-price-data

- **Navigate to the project directory**:
 cd Backend / cd Frontend

 - **Generate Api-key**:
-The project uses the **CoinGecko API** to fetch real-time price data.

- create account on CoinGecko on https://www.coingecko.com
- Generate free Api-Key
- Go to cd Backend/services/dataPoller.js file
- replace `${process.env.api_key}` with your Api-key in headers.

- **dependencies**:
npm install [depencies present in package.json file]

- **Running the Application**:
- Frontend - npm start
- Backend - npx nodemon or npm server.js


- **Open your browser**

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Axios
  - dotenv
  - CORS

- **Frontend**:
  - React.js
  - Axios


## Contact
Email: ruttikashrirao@gmail.com

Linkedin: https://www.linkedin.com/in/ruttikashrirao/