import React, { useState } from 'react';
import './AboutForm1.scss';
import Button from '../../components/Button/Button';
import Layout from '../../hoc/Layout';
import { NavLink } from 'react-router-dom';
import Myinput_ from '../../components/Input_/MyIiput_';
import FormNav from '../../components/FormNav/FormNav';

export default function AboutForm1() {
  const [surname, setSurname] = useState();
  const [name, setName] = useState();
  const [patronymic, setPatronymic] = useState();
  const [date, setDate] = useState();

  return (
    <Layout>
      <div className="wrapper wrapper_about1">
        {/* Slider */}
        <div className="slider slider-about"></div>
        {/* Main-form */}
        <div className="main-form">
          <div className="container">
            <div className="main-form__inner">
              <div className="main-form__title">Стать пайщиком</div>
              
              {/* FormNav */}

              <FormNav/>

              <form action="#" className="main-form__items form-bg">
                <div className="main-form__subtitle">Личные данные</div>
                <div className="main-form__item mb1">
                  <p>Фамилия</p>
                  <Myinput_ placeholder="Иванов" value={surname} setValue={setSurname} />
                </div>

                <div className="main-form__item mb1">
                  <p>Имя</p>
                  <Myinput_ placeholder="Иван" value={name} setValue={setName} />
                </div>

                <div className="main-form__item mb2">
                  <p>Отчество</p>
                  <Myinput_ placeholder="Иванович" value={patronymic} setValue={setPatronymic} />
                </div>

                <div className="main-form__item">
                  <p>Дата рождения</p>
                  <Myinput_ placeholder="00 00 0000" value={date} setDate={setDate} />
                </div>
              </form>
              <NavLink to="../AboutForm2/AboutForm2">
                <Button className="main-form__button btn" img="" variant="">
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
