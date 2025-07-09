
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Section3 from "../assets/chirag-paswan.png";
import PravinKumar from "../assets/praveen.jpg";
import MembershipImg from "../assets/membership.png";
import Amresh from '../assets/amresh.jpg'
import Vision from "../assets/Layer-21.png";
import Mission from "../assets/Layer-22.png";
import Kamal from '../assets/kamal.png'
import Kamal2 from '../assets/member/kamfool.jpg'
import Jeff from '../assets/Jheff.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Layer23,
  Layer24,
  Layer25,
  Layer26,
  Layer27,
  Layer28,
  Layer29,
  Layer30,
  Layer31,
  Layer33,
  Layer34,
  ObjectiveGoals,
} from "../assets";
import OurPartner from "../Components/OurPartner";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import GlobalPresenceSlider from "../Components/GlobalPresenceSlider";
import Roadmap from "../Components/Roadmap";
import MeetOurVisionaryLeader from "../Components/MeetOurVisionaryLeader1";
import MeetOurLeaderHome from "../Components/MeetOurLeaderHome";
import ObjectiveSection from "./ObjectiveSection";
import VisionMissionSection from "../Components/VisionMissionSection";
import BITOBodiesSection from "../Components/BITOBodiesSection";
import InitiativesSection from "../Components/InitiativesSection";
import MembershipSection from "../Components/MembershipSection";



const Home = (props) => {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("https://admin.mockup4clients.com/api/banners")
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error("Banner API error:", error));
  }, []);


  const [aboutData, setAboutData] = useState(null);
  useEffect(() => {
    fetch("https://admin.mockup4clients.com/api/cms/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("CMS About API error:", error));
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false)
  const [modalShow3, setModalShow3] = React.useState(false)
  const [modalShow4, setModalShow4] = React.useState(false)

  const handleClose = () => setModalShow(false);
  const handleClose2 = () => setModalShow2(false)
  const handleClose3 = () => setModalShow3(false)
  const handleClose4 = () => setModalShow4(false)

  return (
    <>
      {/* Hero Banner */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        speed={1200}
        loop={true}
        autoplay={{
          delay: 200000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mainSwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          marginTop: "-170px",
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="h-100 home-slider">
            <Link to={banner.url || "#"}>
              <div
                className="container text-white tomker"
                style={{
                  backgroundImage: `url(https://admin.mockup4clients.com/${banner.image.replace(
                    "public/",
                    ""
                  )})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                }}
              >
                <Row>
                  <Col lg={4}>
                    <div className="first-head-box">
                      <h6 style={{ fontSize: "20px" }} className="d-none">
                        <span style={{ paddingLeft: "6px" }}>Welcome to</span> <br />
                        <span className="sub-heading" style={{ paddingLeft: "6px" }}>
                          Bihar International Trade Organization
                        </span>
                        <br />
                        <span className="main-banner-heading p-0 m-0">BITO</span>
                      </h6>
                      <h6 style={{ fontSize: "20px" }} className="d-none">
                        <span style={{ paddingLeft: "6px" }}>Welcome to Bihar International</span>
                        <br />
                        <span className="sub-heading" style={{ paddingLeft: "6px" }}>
                          Trade Organization
                        </span>
                        <br />
                        <span className="main-banner-heading p-0 m-0">BITO</span>
                      </h6>
                    </div>
                    <p className="bottom-heading d-none" style={{ paddingLeft: "6px" }}>
                      Empowering Bihar - Inspiring World
                    </p>
                  </Col>

                  <Col lg={4}></Col>

                  <Col className="right-heading right-col d-none" lg={4}>
                    <div className="div">
                      <h6>
                        Your Gateway to <span>Bihar&apos;s</span>
                      </h6>
                      <h6>
                        <span>Rich Heritage</span> and Future
                      </h6>
                      <h6>Opportunities</h6>
                      <hr style={{ color: "white" }} />
                      <p>
                        Join us in celebrating Bihar&apos;s legacy while fostering innovation
                        and global connections for a brighter tomorrow.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>

      {/* Second Section */}
      {aboutData && (
        <Container className="mb-0 mb-sm-5">
          <Row className="section-2-row d-flex align-items-center">
            {/* Left div for content */}
            <Col className="left-side-div together" lg={6}>
              <h2 className="section-2-head">
                {aboutData.cms_title?.split(" ").slice(0, 2).join(" ")} <br />
                {aboutData.cms_title?.split(" ").slice(2).join(" ")}
              </h2>

              <span>
                {aboutData.cms_sub_title?.split(",")[0]},
                <strong style={{ color: "black" }}>
                  {" "}
                  {aboutData.cms_sub_title?.split(",").slice(1).join(",").trim()}
                </strong>
              </span>

              <div
                className="section-para"
                dangerouslySetInnerHTML={{ __html: aboutData.cms_new_description }}
              ></div>
            </Col>

            {/* Right div for image */}
            <Col className="right-side-div mx-auto" lg={6}>
              <Image
                style={{ width: "100%" }}
                src={`${aboutData.image_desktop}`}
                alt="desktop-img"
                className="d-sm-block d-none"
              />

              <Image
                style={{ width: "100%" }}
                src={`${aboutData.image_mobile}`}
                alt="mobile-img"
                className="d-sm-none d-block mbon"
              />
            </Col>
          </Row>
        </Container>
      )}

      {aboutData && (
        <div className="">
          <Container className="pb-5">
            <h1 className="text-center section-3-heading d-none d-sm-block pb-5">
              Meet Our Visionary Leaders
            </h1>
            <h1 className="text-center section-3-heading d-sm-none d-block pb-5">
              Meet Our <br /> Visionary Leaders
            </h1>

            <Row className="section-2-row">
              {/* Right image */}
              <Col className="right-side-div" lg={6}>
                <Image
                  className="section-2-img"
                  src={aboutData.image}
                  alt="section-2 img"
                />
              </Col>

              {/* Modal Popup */}
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className="section-2-head new-heading">
                      {aboutData.cms_name_title}
                    </h2>
                    <p className="chairman">{aboutData.cms_subtitle}</p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div
                    className="section-para"
                    dangerouslySetInnerHTML={{ __html: aboutData.cms_contant }}
                  ></div>
                </Modal.Body>
              </Modal>

              {/* Left side content */}
              <Col className="left-side-div" lg={6}>
                <small className="new-heading">{aboutData.cms_name_title}</small>
                <p className="chairman">{aboutData.cms_subtitle}</p>
                <div
                  className="section-para"
                  dangerouslySetInnerHTML={{ __html: aboutData.cms_description }}
                ></div>
                <div>
                  <Button
                    onClick={() => setModalShow(true)}
                    className="section-3-btn px-4 py-2"
                  >
                    Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}


      {/* Third section */}
      {/* Bito advisors section below */}
      {/* <MeetOurLeaderHome /> */}


      {/* Original section */}
      {/* <MeetOurVisionaryLeader/> */}

      {/* Fifth Section */}



      {/* Sixth section Mission & Vision Section */}

      <div style={{ backgroundColor: "#f5e0cb" }}>
        <VisionMissionSection />
      </div>

      {/* Seventh Objectives section */}

      <div>
        <ObjectiveSection />
      </div>

      <div className="road-map">
        <Roadmap />
      </div>

      {/* Eight BITO Bodies section */}

      <div style={{ backgroundColor: "#fffbf5" }} className="mt-sm-0">
        <BITOBodiesSection />
      </div>

      {/* ninth section */}

      <div>
        <InitiativesSection />
      </div>

      {/* Global Presence Slider */}

      <div className="">
        <GlobalPresenceSlider />
      </div>


      {/* Membership in BITO  */}

      <div>
        <MembershipSection />
      </div>


    </>
  );
};

export default Home;
