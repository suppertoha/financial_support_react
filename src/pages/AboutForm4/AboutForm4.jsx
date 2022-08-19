import React from 'react';
import './AboutForm4.scss';
import Button from '../../components/Button/Button';
import Layout from '../../hoc/Layout';
import Regulation from './views/Regulation';
import Checkbox from '../../components/input/Checkbox';
import FormNav from '../../components/FormNav/FormNav';

export default function AboutForm4({ regulation }) {
  return (
    <Layout>
      <div className="wrapper wrapper_about4">
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
                <div className="main-form__info">Ознакомьтесь</div>
                <div className="main-form__cart mb1">
                  {regulation.map((regulation, index) => (
                    <Regulation regulation={regulation} key={index} />
                  ))}
                </div>

                <div className="main-form__body">
                  <div className="main-form__item mb1">
                    <div className="main-form__checkbox">
                      <Checkbox className="main-form__check" />
                    </div>

                    <div className="main-form__text">
                      Я ознакомлен с{' '}
                      <a href="#">
                        уставом кооператива, сметой доходов и расходов, с финансовой отчетностью{' '}
                      </a>
                    </div>
                  </div>
                  <div className="main-form__item mb1">
                    <div className="main-form__checkbox">
                      <Checkbox className="main-form__check" />
                    </div>

                    <div className="main-form__text">
                      Согласен, что в соответствие с п.22.4 Устава КПК «Единство» нести солидарно с
                      членами Кооператива субсидиарную ответственность в пределах невнесенной части
                      дополнительного взноса по обязательствам Кооператива, которые возникли до
                      моего вступления в КПК «Единство».
                    </div>
                  </div>
                  <div className="main-form__item">
                    <div className="main-form__checkbox">
                      <Checkbox className="main-form__check" />
                    </div>

                    <div className="main-form__text">
                      Согласен на обработку моих первональных данных с целью рассмотрения заявки на
                      вступление в кооператив
                    </div>
                  </div>
                </div>
              </form>
              <Button className="main-form__btn btn "> Отправить заявку </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
