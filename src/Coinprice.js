import "./coinprice.css";
import { useEffect, useState } from "react";
function Coinprice() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [pickedCoins, setPickedCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        console.log(json);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h className="coin">Loading...</h>
      ) : (
        <ul>
          <li className="coin">
            <div>
              <iframe
                className="icon"
                style={{ border: "none" }}
                src="https://giphy.com/embed/RaOuaCFvgutEi968Dd"
              ></iframe>
            </div>
            <p>
              {coins[0].symbol} : {coins[0].quotes.USD.price.toFixed(2)} $
            </p>
          </li>
          <li className="coin">
            <div>
              <iframe
                className="icon"
                style={{ border: "none" }}
                src="https://giphy.com/embed/RaOuaCFvgutEi968Dd"
              ></iframe>
            </div>
            <p>
              {coins[1].symbol} : {coins[1].quotes.USD.price.toFixed(2)} $
            </p>
          </li>
          <li className="coin">
            <div>
              <iframe
                className="icon"
                style={{ border: "none" }}
                src="https://giphy.com/embed/RaOuaCFvgutEi968Dd"
              ></iframe>
            </div>
            <p>
              {coins[11].symbol} : {coins[11].quotes.USD.price.toFixed(2)} $
            </p>
          </li>
          <li className="coin">
            <div>
              <iframe
                className="icon"
                style={{ border: "none" }}
                src="https://giphy.com/embed/RaOuaCFvgutEi968Dd"
              ></iframe>
            </div>
            <p>
              {coins[12].symbol} : {coins[12].quotes.USD.price.toFixed(2)} $
            </p>
          </li>
        </ul>
      )}
    </>
  );
}

export default Coinprice;
