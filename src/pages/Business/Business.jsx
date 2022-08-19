import React from 'react';
import './Business.scss';
import Banner_ from '../../components/Banner_/Banner_';
import Button from '../../components/Button/Button';
import Work from '../../components/work/Work';
import Cart_ from '../../components/Cart_/Cart_';
import FormMini from '../../components/FormMini/FormMini';
import Layout from '../../hoc/Layout';
import Gallery from '../../components/Gallery/Gallery';
import SliderLine from '../../components/SliderLine/SliderLine';
import Sort from '../../components/Sort/Sort';

export default function Business() {
  return (
    <Layout>
      <div className="wrapper wrapper-business">
        {/* Slider */}
        <div className="slider">
          {/* Main */}
          <div className="main-form">
            <div className="container">
              <div className="main-form__body">
                <div className="main-form__title">Бизнесу и ИП</div>
                <div className="main-form__inner">
                  <SliderLine
                    defaultValue={5678000}
                    minValue={0}
                    maxValue={15000000}
                    name="Сумма вклада"
                    variant="transparent"
                  />
                  <div className="main-form__sort">
                    <Sort variant="transparent" title="Срок" />
                  </div>
                </div>
              </div>
            </div>

            {/* LoansCart-pc */}
            <div className="cart-mini cart-mini-pc">
              <div className="container">
                <div className="cart-mini__inner">
                  <div className="cart-mini__title">Подходящие вклады</div>

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
                            info="Срок"
                            description="до 2 лет"
                            info1="Сумма"
                            description1="до 5 000 000 ₽"></Cart_>
                          <Cart_
                            className="cart-big"
                            title="Ипотека"
                            title1="«Свой дом»"
                            image="../images/cart_big.2.png"
                            info="Срок"
                            description="до 5 лет"
                            info1="Сумма"
                            description1="до 3 000 000 ₽"></Cart_>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LoansCart-mobi */}
        <div className="cart-mini cart-mini-mobi">
          <div className="container">
            <div className="cart-mini__inner">
              <div className="cart-mini__title">Подходящие вклады</div>

              <div className="cart-big__items">
                <Cart_
                  className="cart-big"
                  title="Кредит"
                  title1="«Бизнес развитие»"
                  image="../images/cart_big.1.png"
                  info="Срок"
                  description="до 2 лет"
                  info1="Сумма"
                  description1="до 5 000 000 ₽"></Cart_>
                <Cart_
                  className="cart-big"
                  title="Ипотека"
                  title1="«Свой дом»"
                  image="../images/cart_big.2.png"
                  info="Срок"
                  description="до 5 лет"
                  info1="Сумма"
                  description1="до 3 000 000 ₽"></Cart_>
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        <Banner_
          className="banner__inner cart"
          title="Достигни большего с пакетом “Премиум”"
          subtitle="Индивидуальные условия по займам и вкладам">
          <Button>Смотреть условия</Button>
        </Banner_>

        {/*<!-- Tabs-gallery Paizick  -->*/}
        <Gallery />

        {/*<!-- Work -->*/}
        <div className="work">
          <div className="container">
            <div className="work__inner">
              <Work
                title="Позаботьтесь о будущем и начните"
                title1="получать доход уже сегодняг"
                text="Для открытия вклада и получения прочих преимуществ вступайте в КПК."
                image="../images/work-man.png">
                <Button>Отправить заявку</Button>
              </Work>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
