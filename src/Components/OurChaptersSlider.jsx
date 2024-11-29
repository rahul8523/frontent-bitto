/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const OurChaptersSlider = () => {
  return (
    <>
      <div className="general-container d-none d-md-flex p-0">
        <input className="radio" type="radio" name="card" id="cardUn1o" />
        <label className="content" htmlFor="cardUn1o" title="SINGAPORE">
          <h1 className="title-card">
            <span className="marg-bott">SINGAPORE</span>
          </h1>
        </label>
        <input className="radio" type="radio" name="card" id="cardDo1s" />
        <label className="content" htmlFor="cardDo1s">
          <h1 className="title-card">
            <span className="marg-bott">SYDNEY</span>
          </h1>
        </label>

        <input className="radio" type="radio" name="card" id="cardT1res" />
        <label className="content" htmlFor="cardT1res">
          <h1 className="title-card">
            <span className="marg-bott">TOKYO</span>
          </h1>
        </label>
        <input className="radio" type="radio" name="card" id="cardCua1tro" />
        <label className="content" htmlFor="cardCua1tro">
          <h1 className="title-card">
            <span className="marg-bott">NEW YORK</span>
          </h1>
        </label>
        <input className="radio" type="radio" name="card" id="cardU1k" />
        <label className="content" htmlFor="cardU1k">
          <h1 className="title-card">
            <span className="marg-bott">LONDON</span>
          </h1>
        </label>

        <input className="radio" type="radio" name="card" id="cardAu1s" />
        <label className="content" htmlFor="cardAu1s">
          <h1 className="title-card">
            <span className="marg-bott">DUBAI</span>
          </h1>
        </label>
      </div>

      <Swiper
  speed={1200}
  loop={true}
  autoplay={{
    delay: 20000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper p-0 d-md-none"
>
  {/* Slide 1 */}
  <SwiperSlide className="w-100">
    <div className="row">
      <div className="col-lg-12 col-sm-2 p-0">
  <div className="general-container d-md-none">
    <input className="radio" type="radio" name="card" id="cardUn1o" />
    <label className="content" htmlFor="cardUn1o" title="SINGAPORE">
      <h1 className="title-card">
        <span className="marg-bott">SINGAPORE</span>
      </h1>
    </label>

    <input className="radio" type="radio" name="card" id="cardDo1s" />
    <label className="content" htmlFor="cardDo1s">
      <h1 className="title-card">
        <span className="marg-bott">SYDNEY</span>
      </h1>
    </label>
    </div></div></div>
  </SwiperSlide>

  <SwiperSlide className="w-100">
    <div className="row">
      <div className="col-lg-12 col-sm-2 p-0">
  <div className="general-container d-md-none">
   

    <input className="radio" type="radio" name="card" id="cardT1res" />
    <label className="content" htmlFor="cardT1res">
      <h1 className="title-card">
        <span className="marg-bott">TOKYO</span>
      </h1>
    </label>
    <input className="radio" type="radio" name="card" id="cardCua1tro" />
    <label className="content" htmlFor="cardCua1tro">
      <h1 className="title-card">
        <span className="marg-bott">NEW YORK</span>
      </h1>
    </label>

    </div></div></div>
  </SwiperSlide>


  {/* Slide 3 */}
  <SwiperSlide  className="w-100">
  <div className="row">
      <div className="col-lg-12 col-sm-2 p-0">
  <div className="general-container d-md-none">
    <input className="radio" type="radio" name="card" id="cardU1k" />
    <label className="content" htmlFor="cardU1k">
      <h1 className="title-card">
        <span className="marg-bott">LONDON</span>
      </h1>
    </label>

    <input className="radio" type="radio" name="card" id="cardAu1s" />
    <label className="content" htmlFor="cardAu1s">
      <h1 className="title-card">
        <span className="marg-bott">DUBAI</span>
      </h1>
    </label></div></div></div>
  </SwiperSlide>



</Swiper>

    </>
  );
};

export default OurChaptersSlider;
