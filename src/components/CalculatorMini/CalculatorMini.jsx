import React, { useState } from 'react';
import './CalculatorMini.scss';
import Myinput_ from '../Input_/MyIiput_';

export default function CalculatorMini({ result, procent, sum1, sum2, text, children }) {
  const [sum, setSum] = useState('');

  return (
    <div>
      <div className="calculator__inner">
        <form action="#" method="post" className="cart calculator__form">
          <div className="calculator__sum">
            <label htmlFor="sum">Сумма ежемесяно</label>
            <Myinput_ placeholder="500 500 ₽" value={sum} setValue={setSum} />
          </div>

          <div className="calculator__deadline">
            <label htmlFor="sum">Cрок</label>
            <div className="calculator__dropdown">
              <div className="calculator__dropdown-button ">
                <input type="text" id="sum" defaultValue="1 год" />
                <div className="calculator__dropdown-images">
                  <img src="../images/arrow_bottom.svg" alt="" />
                </div>
              </div>
              <div className="calculator__fail">
                <ul className="calculator__fail-items">
                  <li className="calculator__fail-item"></li>
                  <li className="calculator__fail-item"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="calculator__mobile">
            <div className="calculator__block">
              <label htmlFor="sum">Сумма кредита</label>
              <Myinput_ placeholder="500 500 ₽" value={sum} setValue={setSum} />
            </div>

            <ul>
              <li>Ставка</li>
              <li>8,7%</li>
            </ul>
          </div>

          <div>{children}</div>
        </form>

        <div className="calculator__description">
          <div className="calculator__result">
            {result}
            <span>{sum1}</span>
          </div>

          <div className="calculator__procent">
            {procent}
            <span>{sum2}</span>
          </div>
          <p className="calculator__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
