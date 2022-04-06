import "./App.css";
import dollar from "./img/dollar.jpg";
import Coinprice from "./Coinprice";

function App() {
  return (
    <>
      <div className="room-for-title">
        <h className="title">Coin Tracker</h>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2vw",
        }}
      >
        <div>
          <div className="ilonmusk">
            <iframe
              src="https://giphy.com/embed/wHB67Zkr63UP7RWJsj"
              style={{ border: "none" }}
            ></iframe>
          </div>
          <div className="ilonmusk2">
            <iframe
              style={{ border: "none", margin: "0" }}
              src="https://giphy.com/embed/Vyaz1B2uY1r0U3KVZ1"
            ></iframe>
          </div>

          <div>
            <iframe
              style={{ margin: "0", border: "none", width: "30vw" }}
              src="https://giphy.com/embed/trN9ht5RlE3Dcwavg2"
            ></iframe>
          </div>
        </div>
        <div className="room-for-coins">
          <Coinprice></Coinprice>
        </div>
      </div>
    </>
  );
}

export default App;
