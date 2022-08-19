import React from 'react';

export default function FormMini({title, sum, term}) {
  return (
    <div className="main-form__inner">
      <h2 className="main-form__title">{title}</h2>
      <form action="#" method="post" className="main-form__form">
        <div className="main-form__input">
          <label htmlFor="sum">{sum}</label>
          <input type="text" id="sum" placeholder="5 678 000 ₽" />
        </div>

        <div className="main-form__input">
          <label htmlFor="sum">{term}</label>
          <div className="main-form__dropdown">
            <div className="main-form__dropdown-button">
              <input type="text" id="sum" placeholder="Любой" />
              <div className="main-form__dropdown-images">
                <img src="images/arrow-bottom.svg" alt="" />
              </div>
            </div>
            <div className="main-form__fail">
              <ul className="main-form__fail-items">
                <li className="main-form__fail-item"></li>
                <li className="main-form__fail-item"></li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
