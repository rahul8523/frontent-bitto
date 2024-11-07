/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import PravinKumar from "../assets/praveen.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const GlobalPresenceSlider = () => {
    return (
        <>
            <Container>
                <div>
                    <h1 className='text-center global-presence-head pb-3'>Our Global Chapters</h1>
                </div>

            </Container>



            <Swiper
                spaceBetween={20}
                speed={1200}
                loop={true}
                autoplay={{
                    delay: 20000, // Set autoplay delay to 4 seconds
                    disableOnInteraction: false, // Keep autoplay running after interaction
                }}
                pagination={{
                    clickable: true, // Enables clickable pagination dots
                    dynamicBullets: true, // Makes pagination bullets interactive
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },  // Mobile: 1 card per slide
                    768: { slidesPerView: 1 }, // Desktop/Tablet: 2 cards per slide
                    1000: { slidesPerView: 1 } // Desktop/Tablet: 2 cards per slide
                }}
                modules={[Autoplay, Pagination]}
                className="d-sm-block d-none"
            >
                {/* Slide 1 */}


                <SwiperSlide>
                    <Row>
                        <Col sm={2} lg={12}>

                            <div className="general-container">
                                <input className="radio" type="radio" name="card" id="cardUn1o" />
                                <label className="content" htmlFor="cardUn1o" title='SINGAPORE'>
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
                        </Col>


                    </Row>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <Row>

                        <Col sm={2} lg={12}>
                            <div className="general-container my-5">

                            <input className="radio" type="radio" name="card" id="carCo12w" />
                                <label className="content" htmlFor="carCo12w">
                                    <h1 className="title-card">
                                        <span className="marg-bott">MOSCOW 1</span>
                                    </h1>
                                </label>

                                <input className="radio" type="radio" name="card" id="carCow0" />
                                <label className="content" htmlFor="carCow0">
                                    <h1 className="title-card">
                                        <span className="marg-bott">MOSCOW 2</span>
                                    </h1>
                                </label>

                                <input className="radio" type="radio" name="card" id="carCo0" />
                                <label className="content" htmlFor="carCo0">
                                    <h1 className="title-card">
                                        <span className="marg-bott">MOSCOW 3</span>
                                    </h1>
                                </label>
                                <input className="radio" type="radio" name="card" id="carCow00" />
                                <label className="content" htmlFor="carCow00">
                                    <h1 className="title-card">
                                        <span className="marg-bott">MOSCOW 3</span>
                                    </h1>
                                </label>
                                <input className="radio" type="radio" name="card" id="carCow32" />
                                <label className="content" htmlFor="carCow32">
                                    <h1 className="title-card">
                                        <span className="marg-bott">MOSCOW 3</span>
                                    </h1>
                                </label>
                                <input className="radio" type="radio" name="card" id="car02Cow" />
                                <label className="content" htmlFor="car02Cow">
                                    <h1 className="title-card">
                                        <span className="marg-bott">MOSCOW 3</span>
                                    </h1>
                                </label>


                            </div>
                        </Col>
                    </Row>
                </SwiperSlide> */}
            </Swiper>

{/* MOBILE SLIDER SECTION START HERE  */}

<Swiper
                spaceBetween={20}
                speed={1200}
                loop={true}
                autoplay={{
                    delay: 20000, // Set autoplay delay to 4 seconds
                    disableOnInteraction: false, // Keep autoplay running after interaction
                }}
                pagination={{
                    clickable: true, // Enables clickable pagination dots
                    dynamicBullets: true, // Makes pagination bullets interactive
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },  // Mobile: 1 card per slide
                    768: { slidesPerView: 1 }, // Desktop/Tablet: 2 cards per slide
                }}
                modules={[Autoplay, Pagination]}
                className="d-sm-none d-block"
            >
                {/* Slide 1 */}


                <SwiperSlide>
                    <Row>
                        <Col sm={2} lg={12}>

                            <div className="general-container">
                                <input className="radio active" type="radio" name="card" id="cardUno1" style={{width:"200px"}}/>
                                <label className="content" htmlFor="cardUno1" title='SINGAPORE'>
                                    <h1 className="title-card">
                                        <span className="marg-bott">SINGAPORE</span>
                                    </h1>
                                </label>
                                <input className="radio" type="radio" name="card" id="cardDos2" />
                                <label className="content" htmlFor="cardDos2">
                                    <h1 className="title-card">
                                        <span className="marg-bott">SYDNEY</span>
                                    </h1>
                                </label>

                                <input className="radio" type="radio" name="card" id="cardTres3" />
                                <label className="content" htmlFor="cardTres3">
                                    <h1 className="title-card">
                                        <span className="marg-bott">TOKYO</span>
                                    </h1>
                                </label>
                             

                            </div>
                        </Col>


                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>

                        <Col sm={2} lg={12}>
                            <div className="general-container">

                            <input className="radio" type="radio" name="card" id="cardCuatro1" />
                                <label className="content" htmlFor="cardCuatro1">
                                    <h1 className="title-card">
                                        <span className="marg-bott">NEW YORK</span>
                                    </h1>
                                </label>
                                <input className="radio" type="radio" name="card" id="cardUk2" />
                                <label className="content" htmlFor="cardUk2">
                                    <h1 className="title-card">
                                        <span className="marg-bott">LONDON</span>
                                    </h1>
                                </label>

                                <input className="radio" type="radio" name="card" id="cardAus3" />
                                <label className="content" htmlFor="cardAus3">
                                    <h1 className="title-card">
                                        <span className="marg-bott">DUBAI</span>
                                    </h1>
                                </label>
                             


                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <Row>

                        <Col sm={2} lg={12}>
                            <div className="general-container my-5">

                            <input className="radio" type="radio" name="card" id="carCow1" />
                                <label className="content" htmlFor="carCow1">
                                    <h1 className="title-card">
                                        <span className="marg-bott">MOSCOW</span>
                                    </h1>
                                </label>

                                <input className="radio" type="radio" name="card" id="cardAus2" />
                                <label className="content" htmlFor="cardAus2">
                                    <h1 className="title-card">
                                        <span className="marg-bott">DEMO 1</span>
                                    </h1>
                                </label>
                                <input className="radio" type="radio" name="card" id="carCow3" />
                                <label className="content" htmlFor="carCow3">
                                    <h1 className="title-card">
                                        <span className="marg-bott">DEMO 2</span>
                                    </h1>
                                </label>


                            </div>
                        </Col>
                    </Row>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}

export default GlobalPresenceSlider