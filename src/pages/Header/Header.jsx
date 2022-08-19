import React, { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/*<Nav/>*/}
      <div className="container">
    
        <div className="header__wrapper">
          <div className="header__menu">
            <a href="#" className="header__logo">
              <img src="../images/logo.png" alt="" />
            </a>

            <div className="header__nav header__nav-pc">
              <div className="header__nav-top">
                <ul className="header__list">
                  <li>
                    <NavLink to="../" className="header__link">
                      {' '}
                      Частным лицам{' '}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="../Business" className="header__link">
                      Бизнесу и ИП
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="../AboutForm" className="header__link">
                      {' '}
                      F-Club{' '}
                    </NavLink>
                  </li>
                </ul>
                <ul className="header__authorization">
                  <li className="header__entrance">
                    <a href="#">Вход / </a>
                  </li>
                  <li className="header__registration">
                    <a href="#">Регистрация</a>
                  </li>
                </ul>
              </div>
              <div className="header__nav-bottom">
                <ul className="header__list">
                  <li>
                    <NavLink to="../Loans" className="header__link">
                      {' '}
                      Кредиты{' '}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="../DepositSpeed3" className="header__link">
                      Ипотека
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="../Deposits" className="header__link">
                      {' '}
                      Вклады{' '}
                    </NavLink>
                  </li>
                  <li>
                    <a href="#" className="header__link">
                      {' '}
                      Премиум{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header__navigation">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`header__burger  ${menuOpen ? menuOpen : 'active'}`}>
              <span> </span>
            </div>
            <div className={`header__mobile ${menuOpen ? menuOpen : 'active'}`}>
              <div className="header__mobile-container">
                <div className="header__mobile-content">
                  <a href="#" className="header__authorization btn">
                    Вход / Регистрация
                  </a>
                  <div className="header__mobile-menu">
                    <ul className="header__list">
                      <li>
                        <NavLink to="../" className="header__link">
                          {' '}
                          Частным лицам{' '}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="../Business" className="header__link">
                          Бизнесу и ИП
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="../AboutForm" className="header__link">
                          {' '}
                          F-Club{' '}
                        </NavLink>
                      </li>
                      <li>
                        <a href="#" className="header__link">
                          {' '}
                          Премиум{' '}
                        </a>
                      </li>
                    </ul>
                    <ul className="header__list">
                      <li>
                        <NavLink to="../Loans" className="header__link">
                          {' '}
                          Кредиты{' '}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="../DepositSpeed3" className="header__link">
                          Ипотека
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="../Deposits" className="header__link">
                          {' '}
                          Вклады{' '}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <ul className="header__info">
                  <li>
                    <a href="#" className="header__tel">
                      + 7 888 888 88 88
                    </a>
                  </li>
                  <li>
                    <a href="#" className="header__email">
                      email@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
