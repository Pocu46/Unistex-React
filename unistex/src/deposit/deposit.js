import React from "react";
import './deposit.scss';

const Deposit = () => {
  return (
    <div className="deposit">
      <div className="container">
        <div className="numbers">
          <p className="percent">%</p>
        </div>
        <div className="text">
          <p className="text-content">
            zero<br> deposit fee
          </p>
          <a className="text-button" href="">
            start
          </a>
        </div>
        <div className="rocket">
          <img className="rocket-item" src="./images/deposit/rocket%20copy.png" alt="icon">
        </div>
      </div>
    </div>
  )
}

export default Deposit;