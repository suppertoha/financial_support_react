import React from "react";
import Header from "../Header/Header";
import './Error.scss'

export default function Error404() {
  return (
    <div className="wrapper wrapper-error">

      {/* Slider */}
      <div className="slider slider-about">
        <div className="error error-404">
          <div className="container">
            <div className="error__inner">
              <div className="error__text">
                Страница не найдена, но вы найдете много интересных предложений на главной:
              </div>
              <a href="#" className="error__button btn">
                Перейти
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
