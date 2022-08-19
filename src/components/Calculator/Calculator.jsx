import React, { useState } from 'react';
import './Calculator.scss';
import RadioButton from '../RadioButton/RadioButton';
import MainCheckbox from '../MainCheckbox/MainCheckbox';
import Sort from '../Sort/Sort';
import SliderLine from '../SliderLine/SliderLine';

export default function Calculator({ result, procent, sum1, sum2, text, children, defaultValue, minValue, maxValue}) {
  const [buttonActive, setButtonActive] = useState(0);
  const [buttonActiveBottom, setButtonActiveBottom] = useState(0);
  const [value, setValue] = useState(0);

  const depositTypes = [
    {
      value: 0,
      title: 'Срочный',
    },
    {
      value: 1,
      title: 'Оптимальный',
    },
    {
      value: 2,
      title: 'Копилка',
    },
  ];

  const replenishTypes = [
    {
      value: 0,
      title: 'Срочный',
    },
    {
      value: 1,
      title: 'Оптимальный',
    },
  ];

  const radio = [
    {
      value: 0,
      title: 'C капитализацией',
    },
    {
      value: 1,
      title: 'Без капитализацией',
    },
  ];

  return (
    <div>
      <div className="calculator__inner">
        <form action="#" method="post" className="cart calculator__form">
          <div className="calculator__sum">
            <SliderLine
              name="Cтартовая сумма"
              variant="bg"
              minValue={minValue}
              maxValue={maxValue}
              defaultValue={defaultValue}
            />
          </div>

          <div className="calculator__deadline">
            <p>Cрок</p>
            <Sort variant="bg" />
          </div>

          <div className="calculator__choice-time calculator__choice">
            <RadioButton
              typesArray={depositTypes}
              value={buttonActive}
              setValue={setButtonActive}
            />
          </div>

          <div className="calculator__checkbox">
            <div className="radio">
              <MainCheckbox typesArray={radio} value={value} setValue={setValue} />
            </div>
          </div>

          <div className="calculator__choice-replenishment calculator__choice">
            <RadioButton
              typesArray={replenishTypes}
              value={buttonActiveBottom}
              setValue={setButtonActiveBottom}
            />
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
