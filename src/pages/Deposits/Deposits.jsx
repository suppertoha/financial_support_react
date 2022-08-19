import React from 'react';
import './Deposits.scss';
import Layout from '../../hoc/Layout';
import Button from '../../components/Button/Button';
import Banner_ from '../../components/Banner_/Banner_';
import Cart_ from '../../components/Cart_/Cart_';
import Work from '../../components/work/Work';
import Gallery from '../../components/Gallery/Gallery';
import SliderLine from '../../components/SliderLine/SliderLine';
import Sort from '../../components/Sort/Sort';
export default function Deposits() {
  return (
    <Layout>
      <div className="wrapper wrapper-deposits">
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
                    <Sort variant="transparent" title="Срок" any />
                  </div>
                </div>
              </div>
            </div>

            {/* cart-mini-pc */}
            <div className="cart-mini cart-mini-pc">
              <div className="container">
                <div className="cart-mini__title">Подходящие вклады</div>

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
          </div>
        </div>

        {/* Cart-mini-mobi */}

        <div className="cart-mini cart-mini-mobi">
          <div className="container">
            <div className="cart-mini__inner">
              <div className="cart-mini__title">Подходящие вклады</div>

              {/* Cart-mini */}
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
        </div>

        {/* Banner */}

        <Banner_
          className="cart banner__inner"
          title="Достигни большего с пакетом “Премиум”"
          subtitle="Индивидуальные условия по займам и вкладам">
          <Button>Смотреть условия</Button>
        </Banner_>

        {/*<!-- Tabs-gallery Paizick  -->*/}

        <Gallery />

        {/*<!-- Work -->*/}
        <div className="work work-man">
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
