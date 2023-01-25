import React, { useState, useEffect } from "react";
import HomeCSS from "./Home.module.css";

function CryptoTable() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCryptoData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={HomeCSS.CryptoTable}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>${crypto.current_price}</td>
              <td>${crypto.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={HomeCSS.refreshButton} onClick={fetchData}>
        Refresh
      </button>
      <p className={HomeCSS.refreshTime}>
        The refresh time may vary from 1 to 5 minutes. If nothing happens after
        pressing the button, it means that the chart is up to date.
      </p>
    </div>
  );
}

export default CryptoTable;
