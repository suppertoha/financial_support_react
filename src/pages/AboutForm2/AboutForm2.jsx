import React, { useState } from 'react';
import './AboutForm2.scss';
import Button from '../../components/Button/Button';
import Layout from '../../hoc/Layout';
import { NavLink } from 'react-router-dom';
import Checkbox from '../../components/input/Checkbox';
import Myinput_ from '../../components/Input_/MyIiput_';
import FormNav from '../../components/FormNav/FormNav';

export default function AboutForm2() {
  const [cell, setCell] = useState();
  const [domestic, setDomestic] = useState();
  const [official, setOfficial] = useState();
  const [registrations, setRegistrations] = useState();
  const [accommodation, setAccommodation] = useState();

  return (
    <Layout>
      <div className="wrapper wrapper_about2">
        {/* Slider */}
        <div className="slider slider-about"></div>
        {/* Main-form */}
        <div className="main-form">
          <div className="container">
            <div className="main-form__inner">
              <div className="main-form__title">Стать пайщиком</div>
              {/* FormNav */}

              <FormNav />
              <form action="#" className="main-form__items form-bg">
                <div className="main-form__subtitle">Контактные данные</div>
                <div className="main-form__info">Телефон</div>
                <div className="main-form__item mb1">
                  <p>Сотовый</p>
                  <Myinput_ placeholder="+7 000 000 00 00" value={cell} setValue={setCell} />
                </div>

                <div className="main-form__item mb1">
                  <p>Домашний </p>
                  <Myinput_
                    placeholder="+7 000 000 00 00"
                    value={domestic}
                    setValue={setDomestic}
                  />
                </div>

                <div className="main-form__item mb2">
                  <p>Служебный</p>
                  <Myinput_
                    placeholder="+7 000 000 00 00"
                    value={official}
                    setValue={setOfficial}
                  />
                </div>

                <div className="main-form__info">Адрес</div>

                <div className="main-form__item mb1">
                  <p>Регистрации</p>
                  <Myinput_
                    placeholder="Город, Улица, номер дома, подезд, квартира"
                    value={registrations}
                    setValue={setRegistrations}
                  />
                </div>

                <div className="main-form__item">
                  <p>Проживания</p>
                  <Myinput_
                    placeholder="Город, Улица, номер дома, подезд, квартира"
                    value={accommodation}
                    setValue={setAccommodation}
                  />
                </div>

                <div className="main-form__checkbox">
                  <Checkbox className="main-form__check" />
                  <p>Проживаю там же, где зарегистрирован</p>
                </div>
              </form>

              <ul className="main-form__buttons">
                <li>
                  <NavLink to="../AboutForm1/AboutForm1">
                    <Button
                      className="main-form__button btn grey"
                      icon="../images/arrow-left.png"
                      variant="grey">
                      {' '}
                      Назад{' '}
                    </Button>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="../AboutForm3/AboutForm3">
                    <Button
                      className="main-form__button btn"
                      icon="../images/arrow-right.png"
                      variant="red">
                      {' '}
                      Далее{' '}
                    </Button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
