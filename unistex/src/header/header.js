import React from "react";
import headerStyle from './header.module.scss';

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.container headerStyle.top}>
        <img className={headerStyle.logo} src={process.env.PUBLIC_URL + '/header/full_logo.png'} alt="icon"/>
        <ul className={headerStyle.buttons-list}>
          <li className={headerStyle.buttons - option}>
            <a href="" className={headerStyle.buttons-item headerStyle.left}>
              login
            </a>
          </li>
          <li className={headerStyle.buttons - option}>
            <a href="" className={headerStyle.buttons - item green}>
              registration
            </a>
          </li>
          <li className={headerStyle.buttons - option}>
            <div className={headerStyle.language}>
              <a href="" className={headerStyle.buttons - item}>
                en
              </a>
              <img className={headerStyle.arrow} src={process.env.PUBLIC_URL + '/header/arrow.png'} alt="icon"/>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;