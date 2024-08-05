import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchStockData = async (symbol) => {
  const response = await axios.get(`${API_BASE_URL}/stocks/${symbol}`);
  console.log(response.data,"response",symbol)
  return response.data;
};
