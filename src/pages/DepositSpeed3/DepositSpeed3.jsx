import React from 'react';
import './DepositSpeed3.scss';
import Layout from '../../hoc/Layout';
import Gallery from '../../components/Gallery/Gallery';
import DepositCart_ from '../../components/DepositCart_/DepositCart_';
import Button from '../../components/Button/Button';
import Calculator from '../../components/Calculator/Calculator';
import SliderLine from '../../components/SliderLine/SliderLine';
import Bid from '../../components/Bid/Bid';

export default function DepositSpeed3() {
  return (
    <Layout>
      <div className="wrapper wrapper-deposit_speed3">
        {/* Slider */}
        <div className="slider ">
          <div className="container">
            <div className="deposit-container">
              <DepositCart_
                title="Свой дом"
                span1="Срок"
                data1="до 5 лет"
                span2="Ставка"
                data2="до 17 %"
                span3="Cумма"
                data3="до 3 000 000 ₽"></DepositCart_>
            </div>
          </div>
        </div>

        {/* Calculator-mini */}
        <div className="calculator calculator-mini">
          <div className="container">
            <Calculator
              result="Ежемесячный платеж"
              sum1="1 000 ₽"
              procent="Ставка"
              sum2="8,7%"
              defaultValue={500500}
              minValue={0}
              maxValue={1200500}
              text="Расчет является примерным и не является офертой.">
              <div className="calculator__children">
                <Button>Смотреть условия</Button>
              </div>
            </Calculator>
          </div>
        </div>

        {/* Calculator */}
        <div className="calculator calculator-mobi">
          <div className="container">
            <Calculator
              result="Ваш доход к концу срока"
              sum1="5 684 000 ₽"
              procent="Ставка"
              sum2="4,6%"
              defaultValue={500500}
              minValue={0}
              maxValue={1200500}
              text="Расчет доходности является предварительным и не является офертой.">
              <Button>Расчитать</Button>
            </Calculator>
          </div>
        </div>

        {/*<!-- Tabs-gallery Paizick  -->*/}
        <Gallery />

        {/*<!-- Work -->*/}
        <div className="work work-mini">
          <div className="container">
            <div className="work__inner">
              <div className="work__content">
                <h2 className="work__title">
                  Позаботьтесь о будущем и начните получать доход уже сегодня
                </h2>
                <Button>Смотреть кредиты</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
