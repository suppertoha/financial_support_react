import "./App.scss";
import React from "react";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Deposits from "./pages/Deposits/Deposits";
import Loans from "./pages/Loans/Loans";
import Business from "./pages/Business/Business";
import DepositSpeed from "./pages/DepositSpeed/DepositSpeed";
import DepositOpt from "./pages/DepositOpt/DepositOpt";
import DepositMoneybox from "./pages/DepositMoneybox/DepositMoneybox";
import DepositSpeed1 from "./pages/DepositSpeed1/DepositSpeed1";
import DepositSpeed2 from "./pages/DepositSpeed2/DepositSpeed2";
import DepositSpeed3 from "./pages/DepositSpeed3/DepositSpeed3";
import Error404 from "./pages/Error/Error-404";
import Error500 from "./pages/Error/Error-500";
import AboutForm from "./pages/AboutForm/AboutForm";
import AboutForm1 from "./pages/AboutForm1/AboutForm1";
import AboutForm2 from "./pages/AboutForm2/AboutForm2";
import AboutForm3 from "./pages/AboutForm3/AboutForm3";
import AboutForm4 from "./pages/AboutForm4/AboutForm4";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./pages/Test/Test";
import Test2 from "./pages/Test2/Test2";

function App() {

  const [banner, setbanner] = useState([
    {
      title: "Поможем быстро добраться до мечты",
      text: "Вклад «Срочный»",
    },
  ]);

  const [banner1, setbanner1] = useState([
    {
      title: "Достигни большего с пакетом “Премиум”",
      text: "Индивидуальные условия по займам и вкладам",
    },
  ]);

  const [carts, setCarts] = useState([
    {
      title: "Кредит «Бизнес развитие»",
      image: <img src="../images/cart_big.1.png" alt="" />,
      span1: "Срок",
      data1: "до 6 мес",
      span2: "Ставка",
      data2: "7,5 %",
    },

    {
      title: `Вклад`,
      title1: `«Оптимальный`,
      image: <img src="../images/cart_big.2.png" alt="" />,
      span1: "Срок",
      data1: "6-12 мес",
      span2: "Ставка",
      data2: "8,1 %",
    },

    {
      title: `Вклад`,
      title1: `«Срочный»`,
      image: <img src="../images/cart_big.3.png" alt="" />,
      span1: "Срок",
      data1: "до 5 лет",
      span2: "Ставка",
      data2: "9,7 %",
    },
  ]);

  const [loansCarts, setloansCarts] = useState([
    {
      title: "Кредит «Любые цели»",
      image: <img src="../images/cart-loans.svg" alt="" />,
      text: "Моменталная выдача, на короткие сроки",
      span1: "Срок",
      data1: "до 5 лет",
      span2: "Сумма",
      data2: "  до 5 000 000 ₽",
    },

    {
      title: "Кредит «Стандарт»",
      image: <img src="../images/cart-loans.svg" alt="" />,
      text: "Длинный срок погашения",
      span1: "Срок",
      data1: "до 2 лет",
      span2: "Сумма",
      data2: "  до 3 000 000 ₽",
    },
  ]);

  const [loansCarts1, setloansCarts1] = useState([
    {
      title: "Кредит «Бизнес развитие»",
      image: <img src="../images/cart_big.1.png" alt="" />,
      span1: "Срок",
      data1: "до 2 лет",
      span2: "Сумма",
      data2: "  до 5 000 000 ₽",
    },

    {
      title: "Кредит «Бизнес»",
      image: <img src="../images/cart_big.2.png" alt="" />,
      span1: "Срок",
      data1: "до 12 мес",
      span2: "Сумма",
      data2: "  до 5 000 000 ₽",
    },
  ]);

  const [deposit_speed, setdeposit_speed] = useState([
    {
      title: "Оптимальный",
      span1: "Срок",
      data1: "до 6 мес",
      span2: "Оптимальный",
      data2: "7,5 %",
      span3: "Минимальная сумма вклада",
      data3: "50 000 ₽",
      span4: "Минимальная сумма взноса",
      data4: "10 000 ₽",
    },
  ]);

  const [deposit_opt, setdeposit_opt] = useState([
    {
      title: "Оптимальный",
      span1: "Срок",
      data1: "6-12 мес",
      span2: "Ставка",
      data2: "8,1 %",
      span3: "Минимальная сумма вклада",
      data3: "50 000 ₽",
      span4: "Минимальная сумма взноса",
      data4: "10 000 ₽",
    },
  ]);

  const [deposit_moneybox, setdeposit_moneybox] = useState([
    {
      title: "Копилка",
      span1: "Срок",
      data1: "12-14 мес.",
      span2: "Ставка",
      data2: "9,7 %",
      span3: "Минимальная сумма вклада",
      data3: "50 000 ₽",
      span4: "Минимальная сумма взноса",
      data4: "10 000 ₽",
    },
  ]);

  const [deposit_speed1, setdeposit_speed1] = useState([
    {
      title: "Любые цели",
      span1: "Срок",
      data1: "до 12 мес",
      span2: "Ставка",
      data2: "до 36 %",
      span3: "Cумма",
      data3: "50 000 ₽ - 5 000 000 ₽",
    },
  ]);

  const [deposit_speed2, setdeposit_speed2] = useState([
    {
      title: "Стандарт",
      span1: "Срок",
      data1: "до 2 лет",
      span2: "Ставка",
      data2: "до 36 %",
      span3: "Cумма",
      data3: "от 100 000 ₽ до 2млн. ₽",
    },
  ]);

  const [deposit_speed3, setdeposit_speed3] = useState([
    {
      title: "Свой дом",
      span1: "Срок",
      data1: "до 5 лет",
      span2: "Ставка",
      data2: "до 17 %",
      span3: "Cумма",
      data3: "до 3 000 000 ₽",
    },
  ]);

  const [regulation, setRegulation] = useState([
    {
      image: <img src="../images/regulation1.png" alt="" />,
      text: 'Устав кооператива'
    },

    {
      image: <img src="../images/regulation2.png" alt="" />,
      text: 'Смета доходов и расходов'
    },

    {
      image: <img src="../images/regulation3.png" alt="" />,
      text: 'Финансовая отчетность'
    },
    {
      image: <img src="../images/regulation1.png" alt="" />,
      text: 'Устав кооператива'
    },

    {
      image: <img src="../images/regulation2.png" alt="" />,
      text: 'Смета доходов и расходов'
    },

    {
      image: <img src="../images/regulation3.png" alt="" />,
      text: 'Финансовая отчетность'
    },
  ])

  const [posts, setPosts] = useState([
  {
    id: 1,
    title: 'член семьи',
    name: 'ФИО:',
    sex: 'Пол',
    man: 'Мужской',
    female:'Женский',
    date: 'Дата рождения'
  },
  {
    id: 2,
    title: 'член семьи',
    image: <img src="../images/delete.svg" alt="" />,
    name: 'ФИО:',
    sex: 'Пол',
    man: 'Мужской',
    female:'Женский',
    date: 'Дата рождения'
  },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }




  //const [password, setPassword] = useState("asdf");

  //useEffect(() => {
  //  console.log(password);
  //}, [password]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main carts={carts} banner={banner} />}
          />
          <Route
            path="/Deposits"
            element={<Deposits banner1={banner1} carts={carts} />}
          />
          <Route
            path="/Loans"
            element={<Loans banner1={banner1} loansCarts={loansCarts} />}
          />
          <Route
            path="/Business"
            element={<Business banner1={banner1} loansCarts1={loansCarts1} />}
          />
          <Route
            path="/DepositSpeed"
            element={
              <DepositSpeed banner1={banner1} deposit_speed={deposit_speed} />
            }
          />
          <Route
            path="/DepositOpt"
            element={<DepositOpt banner1={banner1} deposit_opt={deposit_opt} />}
          />
          <Route
            path="/DepositMoneybox"
            element={<DepositMoneybox deposit_moneybox={deposit_moneybox} />}
          />
          <Route
            path="/DepositSpeed1"
            element={<DepositSpeed1 deposit_speed1={deposit_speed1} />}
          />
          <Route
            path="/DepositSpeed2"
            element={<DepositSpeed2 deposit_speed2={deposit_speed2} />}
          />
          <Route
            path="/DepositSpeed3"
            element={<DepositSpeed3 deposit_speed3={deposit_speed3} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/AboutForm" element={<AboutForm />} />
          <Route path="/AboutForm1/AboutForm1" element={<AboutForm1 />} />
          <Route path="/AboutForm2/AboutForm2" element={<AboutForm2 />} />
          <Route path="/AboutForm3/AboutForm3" element={<AboutForm3 posts={posts} setPosts={setPosts} create={createPost} remove={removePost} />} />
          <Route path="/AboutForm4/AboutForm4" element={<AboutForm4 regulation={regulation} />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="*" element={<Error404 />} />
          {/*<Route path="*" element={<Myinput password={password} setPassword={setPassword} />} />*/}
        </Routes>
      </Router>

      {/*<Error500 />*/}
    </>
  );
}

export default App;
