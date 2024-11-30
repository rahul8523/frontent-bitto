/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import FooterLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook-logo.png";
import Instagram from "../assets/insta.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import { biaQR } from "../assets/bia";
import { head } from "framer-motion/client";

const BIAFooter = () => {


  return (
    <>
      <div style={{ backgroundColor: "#f5e0cb" }}>
        <Container>
          <Row>
            <Col lg={2} className="logo-div">
              <Image
                className="footer-logo"
                src={FooterLogo}
                alt="footer-logo"
              />
            </Col>

            <Col className="footer-info" lg={10}>
              <p>
                Welcome to the BITO Industries Association (BIA), a key pillar of the Bihar International Trade Organization (BITO). We are dedicated to advancing industrial development, promoting innovation, supporting for industry-friendly policies, and promoting sustainable growth, both within India and globally.
                <br /><br />Our mission is to create a dynamic ecosystem where industries, government, and stakeholders collaborate to drive progress and enhance economic prosperity. By championing eco-friendly practices and market opportunities, we aim to build a responsible and resilient industrial future. Join us in shaping a thriving, interconnected industrial landscape that empowers businesses, communities, and the environment.</p>
            </Col>
          </Row>
          {/* Second section in Footer */}

          <Row className="address-email-div-footer">
            <Col className="" lg={3}>
              <div className="address-div">
                <span>India Corporate office Address :-</span>
                <p className="address-para">
                    173, 7th Floor, Tower A, Corenthum, Sector 62, Opp. Electronic City Metro Station, Noida-201309</p>
                   <span> Phone :</span>
                <p>
                  0120-4914498</p>
                  <span> Global Corporate Office Address :-</span><p>
                    207 Kent Street, Sydney, NSW, 2000
                </p>

                <p className="email">
                  {" "}
                  <span style={{ marginRight: '10px' }}>Email:</span>office@bitoworld.in
                </p>
              </div>
            </Col>

            <Col className="quick-Home d-sm-block d-none" lg={2} sm={6}>
              <div className="quick-links">
                <p style={{ fontSize: '15px', fontWeight: '600' }}>Quick Links</p>
                <a style={{ textDecoration: 'none', color: 'black' }} href="/">Home</a>

                <li>About</li>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/history.php"><li>Our Work</li></a>
                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/BSIC.php"><li >BSIC</li></a> */}
                <li>Chapter</li>
                <li>Bihar Voice</li>

              </div>
            </Col>

            <Col
              className="d-sm-block d-none" lg={2} sm={6}>
              <div className="quick-links-2">
                <li>EOI for BIA</li>
                <li>BSIC</li>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://bitoworld.in/old-site/bitoashmita.php'}>Events</Link>

                <li>Media</li>
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/career.php"><li>Job</li></a>



                <li>Contact</li>
                <a style={{ textDecoration: 'none', color: 'black' }} href="/membership" exact>
                  Membership
                </a>

              </div>
             
            </Col>
            {/* MOBILE DEVELOPMENT  */}
            <div className="d-sm-none d-block mobile-footer">
              <Row>

                <Col className="quick-Home w-50" sm={6}>
                  <div className="quick-links">
                    <p style={{ fontSize: '15px', fontWeight: '600' }}>Quick Links</p>
                    <li><a style={{ textDecoration: 'none', color: 'black' }} href="/">Home</a></li>
                    <li>About</li>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/history.php"><li>Our Work</li></a>
                    {/* <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/BSIC.php"><li >BSIC</li></a> */}
                    <li>Chapter</li>
                <li>Bihar Voice</li>

                  </div>
                </Col>

                <Col
                  className="w-50" sm={6}>
                  <div className="quick-links-2 quick-links">
                    <li>EOI for BIA</li>
                    <li>BSIC</li>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://bitoworld.in/old-site/bitoashmita.php'}>Events</Link>

                    <li>Media</li>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/career.php"><li>Job</li></a>



                    <li>Contact</li>
                    <a style={{ textDecoration: 'none', color: 'black' }} href={'/membership'}>Membership</a>

                  </div>
                </Col>
              </Row>
            </div>
            {/* MOBILE DEVELOPMENT END */}
            <Col className="mopbile-news" lg={1} sm={12}>
            <img src={biaQR} alt="qr" width="100%" className="biaQR"/>
            </Col>
            <Col className="mopbile-news" lg={4} sm={12}>
              <div className="newsletter-div">
                <p>Newsletter</p>
                <div
                  style={{ gap: "6px" }}
                  className="news-email-contact d-flex align-items-center justify-content-center"
                >
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <Button className="subs-btn">Subscribe</Button>
                </div>

                <div className="social-footer mt-3">
                  <h4>Social Links</h4>

                  <div className="social-icons d-flex align-items-center">
                    <Link to={'https://www.facebook.com/people/Bihar-International-Trade-Organisation/61553947718537/?mibextid=ZbWKwL'}>
                      <Image
                        src={Facebook}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Instagram}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link to={'https://www.linkedin.com/company/bihar-international-trade-organisation/'}>
                      <Image
                        src={Linkedin}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Twitter}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Youtube}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Third Row */}

        </Container>
        <Container className="py-3 mt-3 copyright">
          <Col lg={12}>
            <p className="footer-last-line text-center m-0">
              Copyright © 2024 Bihar International Trade Organization (BITO)
            </p>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default BIAFooter;
