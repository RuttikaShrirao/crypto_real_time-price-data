import React, { useState, useEffect } from "react";
import { fetchStockData } from "../services/api";

const DataTable = ({ symbol }) => {
  const [stockDetail, setStockDetail] = useState([]);

  // CALL api when symbol changes --->  fetchStockData(symbol)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchStockData(symbol);  
      setStockDetail(result);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [symbol]);

  // var Stockdate=new Date( entry.timestamp).toLocaleString().split(",")
  // var Stockdtime
  // for (var {timestamp: timestamp }of data) {
  //  let localTime= new Date(timestamp).toLocaleString()
  //   Stockdate = localTime.split(",")[0]
  //   Stockdtime = localTime.split(",")[1]
  // }

  // return date & time in table
  const dateAndtime = (dateTime) => {
    for (let i of new Date(dateTime).toLocaleString().split(",")) {
      let [date, time] = new Date(dateTime).toLocaleString().split(",");
      return { date, time };
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Timestamp</th>
            <th>Price (INR)</th>
          </tr>
        </thead>
        <tbody>
          {stockDetail.map((STOCK, index) => (
            <tr key={index}>
              <td>{dateAndtime(STOCK.timestamp).date}</td>
              <td>{dateAndtime(STOCK.timestamp).time}</td>
              <td>{Math.round(STOCK.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
