import React, { useState } from 'react';
import './AboutForm.scss';
import Button from '../../components/Button/Button';
import Layout from '../../hoc/Layout';
import { NavLink } from 'react-router-dom';
import Myinput_ from '../../components/Input_/MyIiput_';

export default function AboutForm({}) {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [code, setCode] = useState('');

  return (
    <Layout>
      <div className="wrapper wrapper_about">
        {/* Slider */}
        <div className="slider slider-about"></div>
        {/* Main-form */}
        <div className="main-form">
          <div className="container">
            <div className="main-form__inner">
              <div className="main-form__title">Стать пайщиком</div>
              <form action="#" className="main-form__items form-bg">
                <div className="main-form__subtitle">Личные данные</div>
                <div className="main-form__item mb1">
                  <p>Фамилия</p>
                  <Myinput_ placeholder="Иванов" value={name} setValue={setName} />
                </div>

                <div className="main-form__item mb1">
                  <p>Имя</p>
                  <Myinput_ placeholder="Иван" value={surname} setValue={setSurname} />
                </div>

                <div className="main-form__item mb1">
                  <p>Отчество</p>
                  <Myinput_ placeholder="Иванович" value={patronymic} setValue={setPatronymic} />
                </div>

                <div className="main-form__item mb2">
                  <p>Телефон</p>
                  <Myinput_ placeholder="+7 000 000 00 00" value={tel} setValue={setTel} />
                </div>

                <div className="main-form__item mb2">
                  <p>e-mail</p>
                  <Myinput_ placeholder="exalple@mail.ru" value={mail} setValue={setMail} />
                </div>

                <div className="main-form__item">
                  <p>ИНН</p>
                  <Myinput_ placeholder="000000000000" value={code} setValue={setCode} />
                </div>
              </form>
              <NavLink to="../AboutForm1/AboutForm1">
                <Button
                  className="main-form__button btn"
                  icon="../images/arrow-right.png"
                  variant="">
                  {' '}
                  Далее{' '}
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
