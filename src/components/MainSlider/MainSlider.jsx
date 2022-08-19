import React from 'react';
import './MainSlider.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Button from '../Button/Button';
import MainCart from '../../components/mainCart/MainCart_';

export default function MainSlider() {
  return (
    <>
      {/* Slider */}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
          <div className="slider">
            {/* Main */}
            <div className="main">
              <div className="container">
                <div className="main-pc">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽">
                    <Button>Смотреть условия</Button>
                  </MainCart>

                  {/*</MainCart>*/}
                </div>
                <div className="main-mobi">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽"></MainCart>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            {/* Main */}
            <div className="main">
              <div className="container">
                <div className="main-pc">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽">
                    <Button>Смотреть условия</Button>
                  </MainCart>

                  {/*</MainCart>*/}
                </div>
                <div className="main-mobi">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽"></MainCart>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            {/* Main */}
            <div className="main">
              <div className="container">
                <div className="main-pc">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽">
                    <Button>Смотреть условия</Button>
                  </MainCart>

                  {/*</MainCart>*/}
                </div>
                <div className="main-mobi">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽"></MainCart>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            {/* Main */}
            <div className="main">
              <div className="container">
                <div className="main-pc">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽">
                    <Button>Смотреть условия</Button>
                  </MainCart>

                  {/*</MainCart>*/}
                </div>
                <div className="main-mobi">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽"></MainCart>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            {/* Main */}
            <div className="main">
              <div className="container">
                <div className="main-pc">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽">
                    <Button>Смотреть условия</Button>
                  </MainCart>

                  {/*</MainCart>*/}
                </div>
                <div className="main-mobi">
                  <MainCart
                    title="Будущий дом ?"
                    title1="Все в твоих руках"
                    description="до 5 лет"
                    description1="до 3 000 000 ₽"></MainCart>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
