import React from "react";
import Header from "../Header/Header";
import './Error.scss'

export default function Error500() {
  return (
    <div className="wrapper wrapper-error500">

      {/* Slider */}
      <div className="slider slider-about">
        <div className="error error-500">
          <div className="container">
            <div className="error__inner">
              <div className="error__text">
              Что то пошло не так, <br /> скоро все заработает вновь
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
