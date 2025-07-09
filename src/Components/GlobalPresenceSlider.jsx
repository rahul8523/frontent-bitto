import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";

const GlobalPresenceSlider = () => {
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    axios
      .get("https://admin.mockup4clients.com/api/chapter")
      .then((res) => setChapter(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!chapter) return null;

  const backgroundImages = [
    chapter.simage,
    chapter.mimage,
    chapter.nimage,
    chapter.eimage,
    chapter.timage,
    chapter.pimage,
  ];

  const cityNames = [
    chapter.cityone,
    chapter.citythree,
    chapter.cityfour,
    chapter.cityfive,
    chapter.citysix,
    chapter.citytwo,
  ];

  return (
    <>
      <Container>
        <div>
          <h1 className="text-center global-presence-head pb-3">{chapter.name}</h1>
        </div>
      </Container>

      {/* === DESKTOP SWIPER === */}
      <Swiper
        spaceBetween={20}
        speed={1200}
        loop={true}
        autoplay={{ delay: 20000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1000: { slidesPerView: 1 },
        }}
        modules={[Autoplay, Pagination]}
        className="d-sm-block d-none"
      >
        <SwiperSlide>
          <Row>
            <Col lg={12}>
              <div className="general-container">
                {backgroundImages.map((bg, idx) => (
                  <React.Fragment key={idx}>
                    <input
                      className="radio"
                      type="radio"
                      name="card"
                      id={`card${idx}`}
                    />
                    <label
                      className="content"
                      htmlFor={`card${idx}`}
                      title={cityNames[idx]}
                      style={{ backgroundImage: `url(${bg})` }}
                    >
                      <h1 className="title-card">
                        <span className="marg-bott">{cityNames[idx]}</span>
                      </h1>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>

      {/* === MOBILE SWIPER === */}
      <Swiper
        spaceBetween={20}
        speed={1200}
        loop={true}
        autoplay={{ delay: 20000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 1 } }}
        modules={[Autoplay, Pagination]}
        className="d-sm-none d-block"
      >
        {/* First 3 cities */}
        <SwiperSlide>
          <Row>
            <Col lg={12}>
              <div className="general-container">
                {[0, 1, 2].map((idx) => (
                  <React.Fragment key={idx}>
                    <input
                      className="radio"
                      type="radio"
                      name="card"
                      id={`mobileCard${idx}`}
                    />
                    <label
                      className="content"
                      htmlFor={`mobileCard${idx}`}
                      title={cityNames[idx]}
                      style={{ backgroundImage: `url(${backgroundImages[idx]})` }}
                    >
                      <h1 className="title-card">
                        <span className="marg-bott">{cityNames[idx]}</span>
                      </h1>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        {/* Remaining 3 cities */}
        <SwiperSlide>
          <Row>
            <Col lg={12}>
              <div className="general-container">
                {[3, 4, 5].map((idx) => (
                  <React.Fragment key={idx}>
                    <input
                      className="radio"
                      type="radio"
                      name="card"
                      id={`mobileCard${idx}`}
                    />
                    <label
                      className="content"
                      htmlFor={`mobileCard${idx}`}
                      title={cityNames[idx]}
                      style={{ backgroundImage: `url(${backgroundImages[idx]})` }}
                    >
                      <h1 className="title-card">
                        <span className="marg-bott">{cityNames[idx]}</span>
                      </h1>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GlobalPresenceSlider;
