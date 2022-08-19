import React from 'react';
import './Loans.scss';
import Layout from '../../hoc/Layout';
import Banner_ from '../../components/Banner_/Banner_';
import Button from '../../components/Button/Button';
import Cart_ from '../../components/Cart_/Cart_';
import Gallery from '../../components/Gallery/Gallery';
import Work from '../../components/work/Work';
import SliderLine from '../../components/SliderLine/SliderLine';
import Sort from '../../components/Sort/Sort';

export default function Loans() {
  return (
    <Layout>
      <div className="wrapper wrapper-loans">
        {/* Slider */}
        <div className="slider">
          {/* Main */}
          <div className="main-form main-form-laons">
            <div className="container">
            
              <div className="main-form__body">
                <div className="main-form__title">Кредиты</div>
                <div className="main-form__inner">
                  <SliderLine name="Сумма вклада" variant="transparent" minValue={0} maxValue={15000000} defaultValue={5675000} />
                  <div className="main-form__sort">
                    <Sort variant="transparent" title='Срок' any/>
                  </div>
                </div>
              </div>
            </div>

            {/* LoansCart-pc */}
            <div className="cart-mini cart-mini-pc cart-laons">
              <div className="container">
                <div className="cart-mini__title">Подходящие вклады</div>
                <div className="cart-mini__inner">
                  <Cart_
                    className="cart-big"
                    title="Кредит"
                    title1="  «Любые цели»"
                    subtitle="Моменталная выдача,"
                    subtitle1="на короткие сроки"
                    image="../images/cart-loans.svg"
                    info="Срок"
                    description="до 5 лет"
                    info1="Сумма"
                    description1="до 5 000 000 ₽"></Cart_>
                  <Cart_
                    className="cart-big"
                    title="Кредит"
                    title1="«Бизнес»"
                    image="../images/cart-loans.svg"
                    subtitle="Длинный срок погашения"
                    info="Срок"
                    description="до 2 лет"
                    info1="Сумма"
                    description1="до 2 000 000 ₽"></Cart_>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LoansCart-mobi */}

        <div className="cart-mini cart-mini-mobi cart-laons">
          <div className="container">
            <div className="cart-mini__inner">
              <div className="cart-mini__title">Подходящие вклады</div>
              <Cart_
                className="cart-big"
                title="Кредит"
                title1="  «Любые цели»"
                subtitle="Моменталная выдача,"
                subtitle1="на короткие сроки"
                image="../images/cart-loans.svg"
                info="Срок"
                description="до 5 лет"
                info1="Сумма"
                description1="до 5 000 000 ₽"></Cart_>
              <Cart_
                className="cart-big"
                title="Кредит"
                title1="«Бизнес»"
                image="../images/cart-loans.svg"
                subtitle="Длинный срок погашения"
                info="Срок"
                description="до 2 лет"
                info1="Сумма"
                description1="до 2 000 000 ₽"></Cart_>
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
        <div className="work work-man">
          <div className="container">
            <Work
              title="Позаботьтесь о будущем и начните "
              title1="получать доход уже сегодня"
              text="  Для открытия вклада и получения прочих преимуществ вступайте в КПК."
              image="../images/work-man.png">
              <Button>Отправить заявку</Button>
            </Work>
          </div>
        </div>
      </div>
    </Layout>
  );
}
