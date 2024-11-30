import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/footer-logo.png";
import Facebook from "../assets/facebook-logo.png";
import Instagram from "../assets/insta.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import { biaQR } from "../assets/bia";

const SocialLinks = () => (
  <div className="social-icons d-flex align-items-center">
    <Link to="https://www.facebook.com/people/Bihar-International-Trade-Organisation/61553947718537/?mibextid=ZbWKwL">
      <Image src={Facebook} className="social-links-img" alt="Facebook" />
    </Link>
    <Link to="#">
      <Image src={Instagram} className="social-links-img" alt="Instagram" />
    </Link>
    <Link to="https://www.linkedin.com/company/bihar-international-trade-organisation/">
      <Image src={Linkedin} className="social-links-img" alt="LinkedIn" />
    </Link>
    <Link to="#">
      <Image src={Twitter} className="social-links-img" alt="Twitter" />
    </Link>
    <Link to="#">
      <Image src={Youtube} className="social-links-img" alt="YouTube" />
    </Link>
  </div>
);

const QuickLinks = ({ links }) => (
  <div className="quick-links">
    {links.map((link, index) => (
      <li key={index}>
        {link.url ? (
          <a style={{ textDecoration: "none", color: "black" }} href={link.url}>
            {link.label}
          </a>
        ) : (
          <span>{link.label}</span>
        )}
      </li>
    ))}
  </div>
);

const BIAFooter = () => {
  const quickLinks1 = [
    { label: "Home", url: "/" },
    { label: "About" },
    { label: "Our Work", url: "https://bitoworld.in/old-site/history.php" },
    { label: "Chapter" },
    { label: "Bihar Voice" }
  ];

  const quickLinks2 = [
    { label: "EOI for BIA" },
    { label: "BSIC" },
    { label: "Events", url: "https://bitoworld.in/old-site/bitoashmita.php" },
    { label: "Media" },
    { label: "Job", url: "https://bitoworld.in/old-site/career.php" },
    { label: "Contact" },
    { label: "Membership", url: "/membership" }
  ];

  return (
    <div style={{ backgroundColor: "#f5e0cb" }}>
      <Container>
        <Row>
          <Col lg={2} className="logo-div">
            <Image className="footer-logo" src={FooterLogo} alt="footer-logo" />
          </Col>

          <Col lg={10} className="footer-info">
            <p>
              Welcome to the BITO Industries Association (BIA), a key pillar of the Bihar International Trade Organization (BITO). We are dedicated to advancing industrial development, promoting innovation, supporting industry-friendly policies, and promoting sustainable growth, both within India and globally.
              <br /><br />
              Our mission is to create a dynamic ecosystem where industries, government, and stakeholders collaborate to drive progress and enhance economic prosperity. By championing eco-friendly practices and market opportunities, we aim to build a responsible and resilient industrial future. Join us in shaping a thriving, interconnected industrial landscape that empowers businesses, communities, and the environment.
            </p>
          </Col>
        </Row>

        {/* Address and Email */}
        <Row className="address-email-div-footer borderTop">
          <Col lg={3}>
            <div className="address-div">
              <span>India Corporate office Address :-</span>
              <p className="address-para">173, 7th Floor, Tower A, Corenthum, Sector 62, Opp. Electronic City Metro Station, Noida-201309</p>
              <span>Phone :</span>
              <p>0120-4914498</p>
              <span>Global Corporate Office Address :-</span>
              <p>207 Kent Street, Sydney, NSW, 2000</p>
              <p className="email">
                <span style={{ marginRight: '10px' }}>Email:</span>
                office@bitoworld.in
              </p>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} className="d-sm-block d-none">
            <QuickLinks links={quickLinks1} />
          </Col>

          <Col lg={2} className="d-sm-block d-none">
            <QuickLinks links={quickLinks2} />
          </Col>

          {/* Mobile Development */}
          <div className="d-sm-none d-block mobile-footer">
            <Row>
              <Col className="col-6 quick-Home">
              <p style={{ fontSize: "15px", fontWeight: "600" }}>Quick Links</p>
                <QuickLinks links={quickLinks1} />
              </Col>
              <Col className="col-6">
                <QuickLinks links={quickLinks2} />
              </Col>
            </Row>
          </div>

          <Col lg={2} sm={12} className="mopbile-news">
            <img src={biaQR} alt="QR Code" width="100%" className="biaQR" />
          </Col>

          {/* Newsletter */}
          <Col lg={3} sm={12} className="mopbile-news">
            <div className="mt-2">
              <p>Newsletter</p>
              <div className="news-email-contact d-flex justify-content-center align-items-center" style={{ gap: "6px" }}>
                <input className="footer-input" type="text" placeholder="Enter your Email" />
                <Button className="subs-btn">Subscribe</Button>
              </div>

              <div className="social-footer mt-3">
                <h4>Social Links</h4>
                <SocialLinks />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

<div className="borderBottom"></div>
      {/* Copyright */}
      <Container className="py-3 copyright">
        <Col lg={12}>
          <p className="footer-last-line text-center m-0">
            Copyright © 2024 Bihar International Trade Organization (BITO)
          </p>
        </Col>
      </Container>
    </div>
  );
};

export default BIAFooter;
