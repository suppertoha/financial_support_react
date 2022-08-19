import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__header">
            <div className="footer__menu footer__menu-pc">
              <ul className="footer__item">
                <li className="footer__title">Кредиты и ипотека</li>
                <li className="footer__link">
                  <NavLink to="../DepositSpeed1">Любые цели</NavLink>
                </li>
                <li className="footer__link">
                  <NavLink to="../DepositSpeed2">Стандарт</NavLink>
                </li>
                <li className="footer__link">
                  <NavLink to="../DepositSpeed3">Свой дом</NavLink>
                </li>
              </ul>

              <ul className="footer__item">
                <li className="footer__title">Вклады</li>
                <li className="footer__link">
                  <NavLink to="../DepositSpeed">Срочный</NavLink>
                </li>
                <li className="footer__link">
                  <NavLink to="../DepositOpt">Оптимальный</NavLink>
                </li>
                <li className="footer__link">
                  <NavLink to="../DepositMoneybox">Копилка</NavLink>
                </li>
              </ul>

              <ul className="footer__item">
                <li className="footer__title">Бизнесу и ИП</li>
                <li className="footer__link">
                  <NavLink to="../DepositSpeed1">Развитие</NavLink>
                </li>
                <li className="footer__link">
                  <a href="#">Бизнесу</a>
                </li>
                <li className="footer__link">
                  <a href="#">Стать пайщиком</a>
                </li>
              </ul>

              <ul className="footer__item">
                <li className="footer__link">
                  <NavLink to="../About">О компании</NavLink>
                </li>
                <li className="footer__link">
                  <a href="#">Вопрос / Ответ</a>
                </li>
              </ul>
            </div>
            <div className="footer__menu footer__menu-mobi">
              <ul>
                <li>
                  <NavLink to="../Loans" className="header__link">
                    {' '}
                    Кредиты{' '}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="../Deposits" className="header__link">
                    {' '}
                    Вклады{' '}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="../Business" className="header__link">
                    Бизнесу и ИП
                  </NavLink>
                </li>
                <li className="footer__link">
                  <NavLink to="../About">О компании</NavLink>
                </li>
                <li>Вопрос / Ответ</li>
              </ul>
            </div>
            <a href="#" className="footer__logo">
              <img src="../images/logo_vertical.png" alt="" />
            </a>
          </div>

          <div className="footer__license">
            Кем выдана лицензия и прочая доп инфа обязательная к размещению. Кем выдана лицензия и
            прочая доп инфа обязательная к размещению. Кем выдана лицензия и прочая доп инфа
            обязательная к размещению. Кем выдана лицензия и прочая доп инфа обязательная к
            размещению.
          </div>

          <div className="footer__contact">
            <a href="#" className="footer__tel">
              + 7 888 888 88 88
            </a>
            <a href="#" className="footer__mail">
              email@email.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
