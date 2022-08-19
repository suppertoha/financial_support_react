import React from 'react'

export default function HeaderMobile() {
  return (
    <div className="header__mobile">
      <div className="header__mobile-container">
        <div className="header__mobile-content">
          <a href="#" className="header__authorization btn">
            Вход / Регистрация
          </a>
          <div className="header__mobile-menu">
            <ul className="header__list">
              <li><a href="#" className="header__link"> Частным лицам </a></li>
              <li><a href="#" className="header__link">Бизнесу и ИП</a></li>
              <li><a href="#" className="header__link"> F-Club </a></li>
            <li><a href="#" className="header__link"> Премиум </a></li>
            </ul>
            <ul className="header__list">
              <li><a href="#" className="header__link"> Кредиты </a></li>
              <li><a href="#" className="header__link">Ипотека</a></li>
              <li><a href="#" className="header__link"> Вклады </a></li>
            </ul>
          </div>
        </div>
        <ul className="header__info">
          <li><a href="#" className="header__tel">+ 7 888 888 88 88</a></li>
          <li><a href="#" className="header__email">email@email.com</a></li>
        </ul>
      </div>
    </div>
  )
}
