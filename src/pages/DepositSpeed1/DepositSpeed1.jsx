import React from 'react';
import './DepositSpeed1.scss';
import Layout from '../../hoc/Layout';
import DepositCart_ from '../../components/DepositCart_/DepositCart_';
import Calculator from '../../components/Calculator/Calculator';
import Button from '../../components/Button/Button';
import Gallery from '../../components/Gallery/Gallery';

export default function DepositSpeed1() {
  return (
    <Layout>
      <div className="wrapper wrapper-deposit_speed1">
        {/* Slider */}
        <div className="slider">
          {/* Main */}
          <div className="main-form">
            {/* LoansCart-pc */}
            <div className="cart-mini cart-mini-pc">
              <div className="container">
                <div className="deposit-container">
                  <DepositCart_
                    title="Любые цели"
                    span1="Срок"
                    data1="до 12 мес"
                    span2="Ставка"
                    data2="до 36 %"
                    span3="Cумма"
                    data3="50 000 - 5 000 000 ₽"></DepositCart_>
                </div>
              </div>
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
