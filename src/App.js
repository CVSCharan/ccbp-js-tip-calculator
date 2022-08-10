import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [percentageTip, setPercentageTip] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  function onChangeBill(e) {
    setBill(e.target.value);
  }

  function onChangePercentageTip(e) {
    setPercentageTip(e.target.value);
  }

  const calculateButton = () => {
    const calculatedTip = (parseInt(percentageTip) / 100) * parseInt(bill);
    const totalAmt = parseInt(bill) + parseInt(calculatedTip);
    setTip(calculatedTip);
    setTotal(totalAmt);
  };

  return (
    <div className="tip-calculator-container pb-5">
      <img
        alt="img"
        className="tip-calculator-image"
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tip-calculator-img.png"
      />
      <h1 className="tip-calculator-heading text-center mt-4 mb-4">
        Tip Calculator
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">BILL AMOUNT</p>
            <input
              id="billAmount"
              type="text"
              className="user-input"
              onChange={onChangeBill}
              value={bill}
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">PERCENTAGE TIP</p>
            <input
              id="percentageTip"
              type="text"
              className="user-input"
              onChange={onChangePercentageTip}
              value={percentageTip}
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">TIP AMOUNT</p>
            <input
              id="tipAmount"
              type="text"
              className="user-input"
              value={tip}
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="input-label mb-2">TOTAL</p>
            <input
              id="totalAmount"
              type="text"
              className="user-input"
              value={total}
            />
          </div>
          <div className="col-12 text-center mt-4">
            <button
              className="btn btn-info calculate-tip-button"
              id="calculateButton"
              onClick={calculateButton}
            >
              CALCULATE
            </button>
            <p id="errorMessage" className="error-message text-center"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
