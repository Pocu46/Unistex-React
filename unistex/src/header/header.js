import React from "react";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container top">
        <img className="logo" src={process.env.PUBLIC_URL + '/header/full_logo.png'} alt="icon"/>
        <ul className="buttons-list">
          <li className="buttons-option">
            <a href="" className="buttons-item left">
              login
            </a>
          </li>
          <li className="buttons-option">
            <a href="" className="buttons-item green">
              registration
            </a>
          </li>
          <li className="buttons-option">
            <div className="language">
              <a href="" className="buttons-item">
                en
              </a>
              <img className="arrow" src={process.env.PUBLIC_URL + '/header/arrow.png'} alt="icon"/>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;