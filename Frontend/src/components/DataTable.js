import React, { useState, useEffect } from 'react';
import { fetchStockData } from '../services/api';
// import { useDispatch, useSelector } from "react-redux"

const DataTable = ({ symbol }) => {
  const [data, setData] = useState([]);
  // const user= useSelector(state=>state.users)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchStockData(symbol);
      setData(result);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <>
    {/* <p>{user} </p> */}
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Price (INR)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
            <td>{Math.round(entry.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default DataTable;
