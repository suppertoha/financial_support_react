import React from "react";
import "./About.scss";
import Layout from "../../hoc/Layout";
//import MainCart from '../Main/views/MainCart'

export default function About() {
  return (
    <Layout>
      <div className="wrapper wrapper_about">
        {/* Slider */}
        <div className="slider slider-about">
          {/* Main-about */}
          <div className="main-about">
            <div className="container">
              <div className="main-about__inner">
                <div className="main-about__logo">
                  <img src="../images/logo_vertical.png" alt="" />
                </div>

                <div className="main-about__content">
                  <p>
                    Кредитный потребительский кооператив ФИНОПОРА – это
                    организация с многолетним и успешным опытом работы на рынке
                    финансовых услуг, что является заслугой коллектива
                    профессионалов.
                  </p>
                  <p>
                    В 2019 году кооперативом было принято решение о перемещении
                    головного офиса в Санкт-Петербург. Мы готовы предложить
                    своим пайщикам надежность сбережений и вкладов, стабильный и
                    выгодный доход, индивидуальный подход к каждому Пайщику.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cooperative */}
        <div className="cooperative">
          <div className="container">
            <div className="cooperative__inner">
              <div className="cooperative__header">
                <h2 className="cooperative__title">
                  Что такое кредитный потребительский кооператив?
                </h2>
                <p>
                  Это некоммерческая организация, создаваемая как добровольное
                  объединение физических и юридических лиц для финансовой
                  взаимопомощи друг другу, а именно для сбережения личных
                  денежных средств и предоставления из них займов членам
                  организации на взаимной основе.
                </p>
              </div>
              <h2 className="cooperative__title title__pc">Наши принципы</h2>
              <h2 className="cooperative__title title__mobi">
                Что такое кредитный потребительский кооператив?
              </h2>

              <div className="cooperative__items">
                <div className="cooperative__item">
                  <div className="cooperative__cart">
                    <div className="cooperative__content">
                      <div className="cooperative__images">
                        <img src="../images/cooperative1.png" alt="" />
                      </div>
                      <div className="cooperative__description">
                        Добровольное вступление в КПК
                      </div>
                    </div>
                  </div>
                  <div className="cooperative__cart">
                    <div className="cooperative__content">
                      <div className="cooperative__images">
                        <img src="../images/cooperative2.svg" alt="" />
                      </div>
                      <div className="cooperative__description">
                        Открытая информации для членов КПК
                      </div>
                    </div>
                  </div>
                  <div className="cooperative__cart">
                    <div className="cooperative__content">
                      <div className="cooperative__images">
                        <img src="../images/cooperative3.svg" alt="" />
                      </div>
                      <div className="cooperative__description">
                        Личное участие членов КПК в управлении
                      </div>
                    </div>
                  </div>
                  <div className="cooperative__cart">
                    <div className="cooperative__content">
                      <div className="cooperative__images">
                        <img src="../images/cooperative4.svg" alt="" />
                      </div>
                      <div className="cooperative__description">
                        Свобода выхода не зависимо от согласия других членов
                      </div>
                    </div>
                  </div>
                  <div className="cooperative__cart">
                    <div className="cooperative__content">
                      <div className="cooperative__images">
                        <img src="../images/cooperative5.svg" alt="" />
                      </div>
                      <div className="cooperative__description">
                        Равные права и обязанности всех членов КПК
                      </div>
                    </div>
                  </div>
                  <div className="cooperative__cart">
                    <div className="cooperative__content">
                      <div className="cooperative__images">
                        <img src="../images/cooperative6.svg" alt="" />
                      </div>
                      <div className="cooperative__description">
                        Принцип голосования : один пайщик – один голос
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="cooperative__title title__pc">КПК позволяет</h2>
              <h2 className="cooperative__title title__mobi">
                Что такое кредитный потребительский кооператив?
              </h2>

              <div className="cooperative__row">
                <div className="cooperative__cart">
                  <div className="cooperative__text">
                    Оказывать финансовую помощь пайщикам КПК в виде займов, физ.
                    и юр. лицам
                  </div>
                </div>
                <div className="cooperative__cart">
                  <div className="cooperative__text">
                    Принимать личные сбережения и привлекать займы пайщиков КПК
                    с выплатой процентов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paizick */}
        <div className="paizick">
          <div className="paizick__bg">
            <img src="../images/paizick-bg.png" alt="" />
          </div>
          <div className="container">
            <div className="paizick__inner">
              <div className="paizick__header">
                <h2 className="paizick__title">Как стать пайщиком?</h2>
                <div className="paizick__text">
                  Любой желающий, как физическое, так и юридическое лицо может
                  стать пайщиком КПК.
                </div>
                <div className="paizick__images">
                  <img src="../images/man.png" alt="" />
                </div>
              </div>

              <div className="paizick__center">
                <div className="paizick__items">
                  <div className="paizick__cart">
                    <div className="paizick__contain">
                      <div className="paizick__number">
                        <span>Заявка</span>
                        01
                      </div>
                      <p>Кандидат пишет заявление на вступление в пайщики.</p>
                    </div>
                  </div>
                  <div className="paizick__cart">
                    <div className="paizick__contain">
                      <div className="paizick__number">
                        <span>Рассмотрение</span>
                        02
                      </div>
                      <p>
                        Правление КПК принимает решение по заявке кандидата.
                      </p>
                    </div>
                  </div>
                  <div className="paizick__cart">
                    <div className="paizick__contain">
                      <div className="paizick__number">
                        <span>Взносы</span>
                        03
                      </div>
                      <p>
                        Новый пайщик единовременно вносит обязательные взносы
                      </p>
                    </div>
                  </div>
                </div>

                <div className="paizick__item">
                  <div className="paizick__cart">
                    <div className="paizick__cart-title">
                      Физические лица и ИП
                      <p>Паевый взнос является возвратным</p>
                    </div>

                    <div className="paizick__number">
                      200 ₽<span>Вступительный членский взнос</span>
                    </div>
                    <div className="paizick__number">
                      500 ₽<span>Паевый взнос</span>
                    </div>

                    <p>Паевый взнос является возвратным</p>
                  </div>
                  <div className="paizick__cart">
                    <div className="paizick__cart-title">
                      Физические лица и ИП
                      <p>Паевый взнос является возвратным</p>
                    </div>

                    <div className="paizick__number">
                      500 ₽<span>Вступительный членский взнос</span>
                    </div>
                    <div className="paizick__number">
                      1000 ₽<span>Паевый взнос</span>
                    </div>

                    <p>Паевый взнос является возвратным</p>
                  </div>
                </div>
              </div>

              <div className="paizick__bottom">
                <div className="cart">
                  <div className="cart__header">
                    <div className="cart__title">
                      Стать <br /> пайщиком
                    </div>
                    <div className="cart__images">
                      <img src="../images/cart-work1.png" alt="" />
                    </div>
                  </div>
                  <div className="cart__content">
                    <div className="cart__data">
                      <span>Срок</span>
                      до 12 мес
                    </div>
                    <div className="cart__rate">
                      <span>Ставка</span>
                      до 10 %
                    </div>
                  </div>
                  <a href="#" className="btn cart__button">
                    Смотреть условия
                  </a>
                </div>
                <div className="paizick__list">
                  <ul>
                    <li>
                      Участвовуйте в управлении Кооператива и избирайтесь в его
                      органы
                    </li>
                    <li>
                      Передавайте другим пайщикам Кооператива сбережения под
                      проценты
                    </li>
                    <li>
                      Возможность размещения Пайщиками-организациями займов под
                      проценты
                    </li>
                    <li>
                      Получайте займы на любые потребительские цели и иные нужды
                    </li>
                  </ul>

                  <ul>
                    <li>
                      Заем денежных средств для развития бизнеса для юр. лиц
                    </li>
                    <li>Получайте стабильный доход от размещенных средств</li>
                    <li>
                      Участвуйте в распределении прибыли по итогам года
                      пропорционально объему взноса
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
