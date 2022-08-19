import React, { useState } from 'react';
import './AboutForm3.scss';
import Button from '../../components/Button/Button';
import Layout from '../../hoc/Layout';
import { NavLink } from 'react-router-dom';
import PostItem from './views/PostItem';
import Myinput_ from '../../components/Input_/MyIiput_';
import FormNav from '../../components/FormNav/FormNav';

export default function AboutForm3({ posts, setPosts, remove, create }) {
  const [work, setWork] = useState();
  const [post, setPost] = useState();
  const [experience, setExperience] = useState();
  const [code, setCode] = useState();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
      title: 'член семьи',
      name: 'ФИО:',
      sex: 'Пол',
      man: 'Мужской',
      female: 'Женский',
      date: 'Дата рождения',
    };
    create(newPost);
    setPosts([...posts, newPost]);
  };

  return (
    <Layout>
      <div className="wrapper wrapper_about3">
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
                <div className="main-form__info">Работа</div>
                <div className="main-form__item mb1">
                  <p>Место работы</p>
                  <Myinput_
                    placeholder="Полное название организации"
                    value={work}
                    setValue={setWork}
                  />
                </div>

                <div className="main-form__item mb1">
                  <p>Должность </p>
                  <Myinput_
                    placeholder="Полное название должности"
                    value={post}
                    setValue={setPost}
                  />
                </div>

                <div className="main-form__item mb2">
                  <p>Полное название должности</p>
                  <Myinput_
                    placeholder="Количество месяцев"
                    value={experience}
                    setValue={setExperience}
                  />
                </div>

                <div className="main-form__info">ИНН Работадателя</div>

                <div className="main-form__item mb2">
                  <Myinput_ placeholder="000000000000" value={code} setValue={setCode} />
                </div>
                <div className="main-form__info">Укажите членов семьи</div>
                {posts.map((post, index) => (
                  <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
                ))}

                <Button
                  style={{ cursor: 'pointer' }}
                  onClick={addNewPost}
                  className="main-form__buttons button-dashed btn">
                  {' '}
                  + Добавить{' '}
                </Button>
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
                  <NavLink to="../AboutForm4/AboutForm4">
                    <Button
                      className="main-form__button btn"
                      icon="../images/arrow-right.png"
                      variant="">
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
