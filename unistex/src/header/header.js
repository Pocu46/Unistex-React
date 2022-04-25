import React from "react";
import './header.scss';

const Header = () => {
    return(
        <header className="header">
            <div className="container top">
                <img className="logo" src="full_logo.png" alt="icon" />
                    <ul className="buttons">
                        <li className="buttons-option">
                            <a href="" className="buttons-item left">
                                login
                            </a>
                        </li>
                        <li>
                            <a href="" className="buttons-item green">
                                registration
                            </a>
                        </li>
                        <li>
                            <div className="language">
                                <a href="" className="buttons-item">
                                    en
                                </a>
                                <img src="arrow.png" alt="icon" />
                            </div>
                        </li>
                    </ul>
            </div>
        </header>
    )
}

export default Header;