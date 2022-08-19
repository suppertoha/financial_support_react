import React from 'react';
import './Main.scss';
import Banner_ from '../../components/Banner_/Banner_';
import Button from '../../components/Button/Button';
import Layout from '../../hoc/Layout';
import Cart_ from '../../components/Cart_/Cart_';
import Calculator from '../../components/Calculator/Calculator';
import Work from '../../components/work/Work';
import MainSlider from '../../components/MainSlider/MainSlider';
import SliderLine from '../../components/SliderLine/SliderLine';
import Bid from '../../components/Bid/Bid';

const Main = () => {
  return (
    <Layout>
      <main className="wrapper wrapper-main">
        {/* Slider */}

        <MainSlider />

        {/* Cart-mini */}
        <div className="cart-mini">
          <div className="container">
            <div className="cart-mini__inner">
              <Cart_
                className="cart-mini"
                title="«Вклад"
                title1="«Срочный»"
                image="../images/cart_1.png"
                info="Срок"
                description="до 6 мес"
                info1="Ставка"
                description1="7,5 %">
                <Button>Смотреть условия</Button>
              </Cart_>
              <Cart_
                className="cart-mini"
                title="«Вклад"
                title1="«Оптимальный"
                image="../images/cart2.png"
                info="Срок"
                description="6-12 мес"
                info1="Ставка"
                description1="8,1 %">
                <Button>Смотреть условия</Button>
              </Cart_>
              <Cart_
                className="cart-mini"
                title="«Вклад"
                title1="«Копилка»"
                image="../images/cart3.png"
                info="Срок"
                description="до 5 лет"
                info1="Ставка"
                description1="9,7 %">
                <Button>Смотреть условия</Button>
              </Cart_>
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

        {/* Banner */}
        <Banner_
          className="banner__inner"
          title="Поможем быстро добраться до мечты"
          subtitle="Вклад «Срочный»">
          <Button>Смотреть условия</Button>
        </Banner_>

        {/* Cart-big */}
        <div className="cart-big">
          <div className="container">
            <div className="cart-big__inner">
              <div className="cart-big__items">
                <Cart_
                  className="cart-big"
                  title="Кредит"
                  title1="«Бизнес развитие»"
                  image="../images/cart_big.1.png"
                  subtitle="Моменталная выдача,"
                  subtitle1=" на короткие сроки"
                  info="Срок"
                  description="до 2 лет"
                  info1="Сумма"
                  description1="до 5 000 000 ₽">
                  <Button>Смотреть условия</Button>
                </Cart_>
                <Cart_
                  className="cart-big"
                  title="Кредит"
                  title1="«Бизнес»"
                  image="../images/cart_big.2.png"
                  subtitle="Длинный срок погашения"
                  info="Срок"
                  description="до 12 мес"
                  info1="Сумма"
                  description1="до 5 000 000 ₽">
                  <Button>Смотреть условия</Button>
                </Cart_>
                <Cart_
                  className="cart-big"
                  title="Ипотека"
                  title1="«Свой дом»"
                  image="../images/cart_big.3.png"
                  subtitle="Мечтаете о своем жилье?"
                  subtitle1="Поможем приобрессти свое."
                  info="Срок"
                  description="до 5 лет"
                  info1="Сумма"
                  description1="до 3 000 000 ₽">
                  <Button>Смотреть условия</Button>
                </Cart_>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator-mini */}
        <div className="calculator calculator-mini">
          <div className="container">
            <Calculator
              result="Сумма ежемесячно"
              sum1="5 000 ₽"
              procent="Ставка"
              sum2="8,7%"
              defaultValue={5678000}
              minValue={0}
              maxValue={15000000}
              text="Расчет является примерным и не является офертой.">
              <div className="calculator__children">
                <div className="calculator__line">
                  <SliderLine
                    name="Сумма кредита"
                    variant="bg"
                    minValue={0}
                    maxValue={15000000}
                    defaultValue={5678000}
                  />
                </div>
                <Bid />
                <Button>Смотреть условия</Button>
              </div>
            </Calculator>
          </div>
        </div>

        {/* Work */}
        <div className="work">
          <div className="container">
            <div className="work__inner">
              <Work
                title="Многолетний успешный опыт работы"
                title1="на рынке финансовых услуг"
                text="Мы готовы предложить своим пайщикам надежность сбережений и вкладов с учетом страхования, стабильный и выгодный доход, индивидуальный подход к каждому Пайщику."
                image="../images/work-man.png"
              />

              <div className="work__cart">
                <Cart_
                  className="cart-mini"
                  title="Стать"
                  title1="пайщиком"
                  image="../images/cart-work1.png"
                  info="Срок"
                  description="до 12 мес"
                  info1="Ставка"
                  description1="до 10 %">
                  <Button>Смотреть условия</Button>
                </Cart_>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Main;
