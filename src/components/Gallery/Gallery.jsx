import React,{useState} from 'react';
import './Gallery.scss'

export default function Gallery() {
  const [toggleState, settoggleState] = useState(1);
  const toggleTab = (index) => {
    settoggleState(index);
  };
  return (
    <div className="tabs tabs-gallery">
      <div className="container">
        <div className="tabs__inner">
          <ul className="tabs__nav bloc-tabs">
            <li className="tabs__nav-item">
              <div
                className={toggleState === 1 ? 'tabs_ active-tabs' : 'tabs_'}
                onClick={() => toggleTab(1)}>
                Как получить?
              </div>
            </li>

            <li className="tabs__nav-item">
              <div
                className={toggleState === 2 ? 'tabs_ active-tabs' : 'tabs_'}
                onClick={() => toggleTab(2)}>
                Документы
              </div>
            </li>

            <li className="tabs__nav-item">
              <div
                className={toggleState === 3 ? 'tabs_ active-tabs' : 'tabs_'}
                onClick={() => toggleTab(3)}>
                Погашение кредита
              </div>
            </li>

            <li className="tabs__nav-item">
              <div
                className={toggleState === 4 ? 'tabs_ active-tabs' : 'tabs_'}
                onClick={() => toggleTab(4)}>
                Часто задаваемые вопросы
              </div>
            </li>
          </ul>

          <div className="tabs__items bloc-tabs">
            {/*<!-- Get -->*/}
            <div className={toggleState === 1 ? 'content active-content' : 'content'}>
              <div className="paizick">
                <div className="">
                  <div className="paizick__items">
                    <div className="paizick__cart">
                      <div className="paizick__contain">
                        <div className="paizick__number">
                          <span>Стать пайщиком</span>
                          01
                        </div>
                        <p>
                          Отправьте заявку на сайте и подпишитте документы после принятия решения
                        </p>
                      </div>
                    </div>
                    <div className="paizick__cart">
                      <div className="paizick__contain">
                        <div className="paizick__number">
                          <span>Заявка</span>
                          02
                        </div>
                        <p>
                          Выберете нужную вам сумму и тариф, Мы расмотрим заявку в течение одного
                          дня
                        </p>
                      </div>
                    </div>
                    <div className="paizick__cart">
                      <div className="paizick__contain">
                        <div className="paizick__number">
                          <span>Получение</span>
                          03
                        </div>
                        <p>
                          Наличными или на любую удобную для вас карту. Переводы в личном кабинете
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Document -->*/}
            <div className={toggleState === 2 ? 'content active-content' : 'content'}>
              <div className="document">
                <div className="">
                  <div className="document__inner">
                    <div className="document__items grey-cart">
                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/document.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">Название документа</div>
                      </div>

                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/document.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">Название документа</div>
                      </div>

                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/document.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">Название документа</div>
                      </div>

                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/document.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">Название документа</div>
                      </div>

                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/document.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">Название документа</div>
                      </div>

                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/document.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">Название документа</div>
                      </div>
                    </div>

                    <h2 className="document__title">Заголовок</h2>
                    <div className="document__text">
                      <p>
                        Вид дополнительного текста, сюда можно писат любую доп инфо о
                        предооставляемых продуктах. Вид дополнительного текста, сюда можно писат
                        любую доп инфо о предооставляемых продуктах. Вид дополнительного текста,
                        сюда можно писат любую доп инфо о предооставляемых продуктах. Действуют для
                        заемщиков, заключивших Договор выдачи Кредита наличными и подписавших
                        Индивидуальные условия выдачи Кредита наличными, предоставленные на
                        основании Заявления на получение Кредита наличными с 1 июня 2014 года.
                      </p>
                      <p>
                        Вид дополнительного текста, сюда можно писат любую доп инфо о
                        предооставляемых продуктах. Вид дополнительного текста, сюда можно писат
                        любую доп инфо о предооставляемых продуктах. Вид дополнительного текста,
                        сюда можно писат любую доп инфо о предооставляемых продуктах. Действуют для
                        заемщиков, заключивших Договор выдачи Кредита наличными и подписавших
                        Индивидуальные условия выдачи Кредита наличными, предоставленные на
                        основании Заявления на получение Кредита наличными с 1 июня 2014 года.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Loan -->*/}
            <div className={toggleState === 3 ? 'content active-content' : 'content'}>
              <div className="document">
                <div className="">
                  <div className="document__inner">
                    <div className="document__items grey-cart loan">
                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/loan1.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">Возврат займа – равными платежами</div>
                      </div>

                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/loan2.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">
                          Членский взнос погашается не позднее 1 числа каждого месяца
                        </div>
                      </div>

                      <div className="grey-cart__cart">
                        <div className="grey-cart__images">
                          <img src="../images/loan3.svg" alt="" />
                        </div>
                        <div className="grey-cart__text">
                          Членский взнос заемщика составляет 3-4% от суммы займа
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* questions */}
            <div className={toggleState === 4 ? 'content active-content' : 'content'}>
              <div className="questions">
                <div className="">
                  <div className="questions__inner">
                    <div className="questions__body">
                      <div className="questions__header">
                        <div className="questions__description">Выплата процентов</div>

                        <div className="questions__arrow">
                          <img src="../images/questions-arrow.svg" alt="" />
                        </div>
                      </div>

                      <div className="questions__text">
                        <p>
                          Текст ответа на вопрос. Ответы ллучше делать корооткими по ообьему
                          примерно как текст который написан тут. Можно оставить ссылку ведущую на
                          отдельную страницу.
                        </p>
                        <p>
                          Тем не мене можно написать два абзаца. Значимость этих проблем настолько
                          очевидна, что сложившаяся структура организации требуют определения и
                          уточнения модели развития. Задача организации, в особенности же новая
                        </p>
                      </div>
                    </div>

                    <div className="questions__body">
                      <div className="questions__header">
                        <div className="questions__description">Досрочное расторжение</div>

                        <div className="questions__arrow">
                          <img src="../images/questions-arrow.svg" alt="" />
                        </div>
                      </div>

                      <div className="questions__text">
                        <p>
                          Текст ответа на вопрос. Ответы ллучше делать корооткими по ообьему
                          примерно как текст который написан тут. Можно оставить ссылку ведущую на
                          отдельную страницу.
                        </p>
                        <p>
                          Тем не мене можно написать два абзаца. Значимость этих проблем настолько
                          очевидна, что сложившаяся структура организации требуют определения и
                          уточнения модели развития. Задача организации, в особенности же новая
                        </p>
                      </div>
                    </div>

                    <div className="questions__body">
                      <div className="questions__header">
                        <div className="questions__description">Членский взнос</div>

                        <div className="questions__arrow">
                          <img src="../images/questions-arrow.svg" alt="" />
                        </div>
                      </div>

                      <div className="questions__text">
                        <p>
                          Текст ответа на вопрос. Ответы ллучше делать корооткими по ообьему
                          примерно как текст который написан тут. Можно оставить ссылку ведущую на
                          отдельную страницу.
                        </p>
                        <p>
                          Тем не мене можно написать два абзаца. Значимость этих проблем настолько
                          очевидна, что сложившаяся структура организации требуют определения и
                          уточнения модели развития. Задача организации, в особенности же новая
                        </p>
                      </div>
                    </div>

                    <div className="questions__body">
                      <div className="questions__header">
                        <div className="questions__description">Выплата процентов</div>

                        <div className="questions__arrow">
                          <img src="../images/questions-arrow.svg" alt="" />
                        </div>
                      </div>

                      <div className="questions__text">
                        <p>
                          Текст ответа на вопрос. Ответы ллучше делать корооткими по ообьему
                          примерно как текст который написан тут. Можно оставить ссылку ведущую на
                          отдельную страницу.
                        </p>
                        <p>
                          Тем не мене можно написать два абзаца. Значимость этих проблем настолько
                          очевидна, что сложившаяся структура организации требуют определения и
                          уточнения модели развития. Задача организации, в особенности же новая
                        </p>
                      </div>
                    </div>

                    <div className="questions__body">
                      <div className="questions__header">
                        <div className="questions__description">Досрочное расторжение</div>

                        <div className="questions__arrow">
                          <img src="../images/questions-arrow.svg" alt="" />
                        </div>
                      </div>

                      <div className="questions__text">
                        <p>
                          Текст ответа на вопрос. Ответы ллучше делать корооткими по ообьему
                          примерно как текст который написан тут. Можно оставить ссылку ведущую на
                          отдельную страницу.
                        </p>
                        <p>
                          Тем не мене можно написать два абзаца. Значимость этих проблем настолько
                          очевидна, что сложившаяся структура организации требуют определения и
                          уточнения модели развития. Задача организации, в особенности же новая
                        </p>
                      </div>
                    </div>

                    <div className="questions__body">
                      <div className="questions__header">
                        <div className="questions__description">Остались вопросы?</div>

                        <div className="questions__arrow">
                          <img src="../images/questions-arrow.svg" alt="" />
                        </div>
                      </div>

                      <div className="questions__text">
                        Задайте их нам любым удобным для вас способом: +7 (800) 777-67-90 +7 (812)
                        336-43-82 kpk.finopra@yandex.ru
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
