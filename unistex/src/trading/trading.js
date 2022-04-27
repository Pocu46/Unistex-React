import React from "react";
import './trading.scss';

const Trading = () => {
  return (
    <div className="deposit">
      <div className="container">
        <div className="numbers">
          <p className="percent">%</p>
        </div>
        <div className="text">
          <p className="text-content">
            zero<br/> deposit fee
          </p>
          <a className="text-button" href="">
            start
          </a>
        </div>
        <div className="rocket">
          <img className="rocket-item" src={process.env.PUBLIC_URL + '/trading/flag.png'} alt="icon"/>
        </div>
      </div>
    </div>
  )
}

export default Trading;