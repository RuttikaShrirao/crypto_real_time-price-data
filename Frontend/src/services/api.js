import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchStockData = async (symbol) => {

  const response = await axios.get(`${API_BASE_URL}/stocks/${symbol}`);
  console.log(response.data,"response")
  return response.data;
};

export const updateTrackedSymbol = async (symbol) => {
  await axios.post(`${API_BASE_URL}/setting`, { symbol });
};

export const fetchTrackedSymbol = async () => {
  const response = await axios.get(`${API_BASE_URL}/setting`);
//   console.log(response.data,"response.data")
  return response.data;
};
