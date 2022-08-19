import React from "react";
import "./DepositSpeed.scss";
import Layout from '../../hoc/Layout';
import DepositCart_ from '../../components/DepositCart_/DepositCart_';
import Calculator from '../../components/Calculator/Calculator';
import CalculatorMini from '../../components/CalculatorMini/CalculatorMini';
import Button from '../../components/Button/Button';
import Gallery from '../../components/Gallery/Gallery';

export default function DepositSpeed() {

  return (
    <Layout>
      <div className="wrapper wrapper-deposit_speed">
        {/* Slider */}
        <div className="slider">
          {/* Main */}
          <div className="main-form">
            {/* LoansCart-pc */}
            <div className="cart-mini cart-mini-pc">
              <div className="container">
                <div className="deposit-container">
                  <DepositCart_
                    title="Стандарт"
                    span1="Срок"
                    data1="до 6 мес"
                    span2="Ставка"
                    data2="7,5 %"
                    span3="Минимальная сумма вклада"
                    data3="50 000 ₽"
                    span4="Минимальная сумма взноса"
                    data4="10 000 ₽"
                  >
                    </DepositCart_>
                </div>
              </div>
            </div>
          </div>
        </div>


      
        {/* Calculator */}
        <div className="calculator">
          <div className="container">

            <Calculator
              result="Ваш доход к концу срока"
              sum1="5 684 000 ₽"
              procent="Ставка"
              sum2="4,6%"
              defaultValue={5678000}
              minValue={0}
              maxValue={15000000}
              text="Расчет доходности является предварительным и не является офертой.">
              <Button>Смотреть условия</Button>
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
