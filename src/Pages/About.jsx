/* eslint-disable react/no-unescaped-entities */
import { Image, Tab, Tabs } from "react-bootstrap";
import { aboutUs, biharAsmitaFoundation, curriculum, economics, future, infra, lachhuar, meetup, multiSpecialityHospital, organizationalStructure, socialImpact, spiritual, training } from "../assets/about";
import { biaMission, biaVision } from "../assets/bia";
import MeetOurVisionaryLeader from "../Components/MeetOurVisionaryLeader1";
import "./about.css";

const About = () => {
  return (
    <div>
      {/* Home Banner */}
      <section className="about-img d-flex align-items-end">
        <div className="container">
          <div className="text-white">
            <p className="fs-4 m-0 font-bnpr" style={{ marginTop: "330px" }}>
              Welcome to
            </p>
            <strong className="fs-4 font-bnpr">
              Bihar Internatinal Trade Organization
            </strong>
            <h2
              key={1}
              className="bannerHeading"
              style={{ fontSize: "100px", fontWeight: 700 }}
            >
              About Us
            </h2>
          </div>
        </div>
      </section>

      <section className="container py-3 py-md-5">
        <div className="row pb-4 pb-md-1">
          <div className="col-12 col-md-6 my-3 my-md-1">
            <h3 className="biaHeading">About Us</h3>
            <h4 className="font-neulis-mdm">
              From Roots to Wings: The Story of BITO
            </h4>
            <p>
              The Bihar International Trade Organization (BITO) incepted in 2015
              with a simple but powerful dream: to uplift Bihar—its people,
              culture, and economy—and change its story for the better. From its
              humble beginnings in Lachhuar, Jamui, BITO has grown into a global
              movement, connecting Biharis in over 25 countries.
            </p>
            <p>
              Through projects that empower small businesses, celebrate Bihar’s
              rich heritage, and improve education and healthcare, BITO has
              become a symbol of hope and progress. It brings Biharis together,
              inspiring pride in their roots and confidence in their future.
            </p>
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-5">
            <img src={aboutUs} alt="" width="100%" />
          </div>
        </div>
      </section>

      <section className="bg-yellow-light">
        <div className="container py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-3 py-3">
                <img
                  src={biaVision}
                  alt=""
                  width={70}
                  height={70}
                  className="biaVisionMissionImg"
                />
                <h4 className="biaHeading m-0">Vision</h4>
              </div>
              <p>
                BITO envisions itself as a catalyst for transformation of Bihar
                leading to a future state where Bihar stands as a global leader
                in economic innovation, cultural heritage, and social progress.
              </p>
              <p>
                By empowering local industries, nurturing entrepreneurship, and
                preserving its rich cultural legacy, BITO aims to position Bihar
                as a dynamic and resilient community that inspires pride and
                prosperity for generations to come.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-3 py-3">
                <img
                  src={biaMission}
                  alt=""
                  width={70}
                  height={70}
                  className="biaVisionMissionImg"
                />
                <h4 className="biaHeading m-0">Mission</h4>
              </div>
              <p>
                BITO’s mission is to catalyze economic growth and cultural pride
                in Bihar by fostering innovation, supporting entrepreneurship,
                and promoting global recognition of its rich heritage.
              </p>
              <p>
                Through strategic partnerships and community-driven initiatives,
                BITO seeks to empower Biharis worldwide, enhancing their
                economic opportunities and cultural identity while driving
                positive transformation within and beyond the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MeetOurVisionaryLeader />

      <section className="container pb-3 pb-md-5">
        {/* DESKTOP DESIGN LAYOUT */}
        <h1 className="section-3-heading d-none d-sm-block pb-4">
          Our Journey: Transforming Dreams into Reality
        </h1>

        {/* MOBILE DESIGN LAYOUT */}
        <h1 className="text-center section-3-heading d-sm-none d-block pb-5">
          Our Journey: <br />
          Transforming Dreams into Reality
        </h1>

        <div className="row section-2-row">
          {/* Right div for image */}
          <div className="right-side-div col-lg-6">
            <Image
              className="section-2-img rounded-0"
              src={lachhuar}
              alt="section-2 img"
            />
          </div>

          {/* Left div for content */}
          <div className="left-side-div col-lg-6">
            <h4 className="font-neulis-mdm">
              Lachhuar: A Story of Revival and Pride
            </h4>
            <p>
              Under the visionary leadership of Shri Chirag Paswan, Lachhuar,
              Jamui—the birthplace of Bhagwan Mahavir—has become a symbol of
              what passion and purpose can achieve:
            </p>
            <ul className="list-unstyled">
              <li className="d-flex">
                <img src={infra} alt="" height={30} width={30} />
                <div className="ms-3">
                  <h5 className="font-neulis-mdm font-18">
                    Infrastructure Upgrades
                  </h5>
                  <p>
                    A Jain Temple, a 108-bed hospital, and a state-of-the-art
                    guesthouse.
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <img src={spiritual} alt="" height={30} width={30} />
                <div className="ms-3">
                  <h5 className="font-neulis-mdm font-18">
                    Spiritual Tourism Boom
                  </h5>
                  <p>
                    Lachhuar integrated into the Jain Circuit, attracting over
                    10 lakh visitors annually.
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <img src={economics} alt="" height={30} width={30} />
                <div className="ms-3">
                  <h5 className="font-neulis-mdm font-18">Economic Growth</h5>
                  <p>
                    Investments of nearly ₹1000 crore have turned Jamui into one
                    of Bihar’s fastest-developing districts (NITI Aayog).
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-yellow-light">
        <div className="container py-3 py-md-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-3 pb-3">
                <h4 className="biaHeading m-0">Our Social Impact</h4>
              </div>
              <h4 className="font-neulis-mdm">
                Bihar Skill University: Shaping Futures
              </h4>
              <p>
                Education is the key to progress, and BITO is proud to support
                the creation of Bihar Skill University. This university aims to
                empower the youth of Bihar by providing top-quality skill
                development programs that prepare them for opportunities around
                the world.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <img src={curriculum} alt="" height={30} width={30} />
                  <div className="ms-3">
                    <h5 className="font-18 font-neulis-mdm">
                      Modern Curriculum
                    </h5>
                    <p>
                      Focused on building innovation and entrepreneurship
                      skills.
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <img src={training} alt="" height={30} width={30} />
                  <div className="ms-3">
                    <h5 className="font-18 font-neulis-mdm">
                      Practical Training
                    </h5>
                    <p>
                      Partnerships with industries to offer hands-on experience
                      and job opportunities.
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <img src={future} alt="" height={30} width={30} />
                  <div className="ms-3">
                    <h5 className="font-18 font-neulis-mdm">A Bright Future</h5>
                    <p>
                      Giving hope to thousands of students striving for a better
                      tomorrow.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <Image
                className="section-2-img py-3 rounded-0"
                src={socialImpact}
                alt="section-2 img"
              />
              <p className="text-brown">
                "This is more than just a university—it’s a promise to our youth
                that no dream is too big, no goal too far."
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <Image
                className="section-2-img rounded-0"
                src={multiSpecialityHospital}
                alt="section-2 img"
              />
            </div>
            <div className="col-lg-6 p-3">
              <h4 className="font-neulis-mdm">
                BITO Multi-Specialty Hospital:
                <br /> A Lifeline for Bihar
              </h4>
              <p>
                BITO’s healthcare projects are not just infrastructure—they’re a
                lifeline for countless families across the state. The 108-bed
                hospital in Lachhuar is a testament to BITO’s commitment to
                providing accessible, quality healthcare.
              </p>
              <ul>
                <li>
                  <p>
                    Focus on maternal and child health, critical care, and
                    specialized treatments.
                  </p>
                </li>
                <li>
                  <p>Affordable healthcare for the underprivileged.</p>
                </li>
                <li>
                  <p>
                    A center of healing for those who had to travel far for
                    medical needs.
                  </p>
                </li>
              </ul>

              <p className="text-brown">
                “For every mother who worried about her child’s health, for
                every family that lost hope waiting for treatment—this hospital
                stands as a symbol of compassion and care.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-3 py-md-5">
        <h3 className="text-center biaHeading">Our Initiatives</h3>
        <p className="text-center">
          At BITO, our mission transcends growth—it’s about empowering lives and
          creating a lasting legacy for Bihar and its people. From fostering
          entrepreneurship to celebrating our rich heritage, every initiative is
          crafted to elevate Bihar globally.
        </p>
        <OurInitiativeTabs />
      </section>

      <section className="bg-brown-dark text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h2 className="fs-1">Membership</h2>
            </div>
            <div className="col-md-9">
              Membership in BITO will be open to individuals, entrepreneurs,
              industrialists, professionals, and organizations having a
              connection to Bihar and sharing the vision and values of the
              organization. Members will benefit from networking opportunities,
              participation in events, access to resources, and collaboration
              with other like-minded businesses.
            </div>
          </div>
          <img src={meetup} alt="" width={"100%"} className="my-4" />

          <div className="mt-4">
            <p>
              <strong>A. Trade Fairs and Exhibitions:</strong> Organizing
              domestic and international trade fairs and exhibitions to showcase
              products and services from Bihar.
            </p>
            <p>
              <strong>B. Business Delegations: </strong> Facilitating business
              delegations to other states and countries to explore new markets
              and investment opportunities.
            </p>
            <p>
              <strong>C. Knowledge Sharing Events: </strong> Hosting seminars,
              workshops, and conferences on topics related to business
              development, innovation, and sustainability.
            </p>
            <p>
              <strong>D. Skill Development Programs:</strong> Conducting
              training programs and skill development initiatives to enhance the
              capabilities of entrepreneurs and professionals.
            </p>
            <p>
              <strong>E. Investment Summits:</strong> Organizing investment
              summits to attract investors and promote Bihar as an investment
              destination.
            </p>
          </div>
          <div className="d-md-flex justify-content-between mt-5">
            <div className="w-md-50">
              <h2 className="font-neulis-mdm">Membership in BITO</h2>
              <p>
                will be open to individuals, entrepreneurs, industrialists,
                professionals, and organizations with ties to Bihar.
              </p>
            </div>

            <button className="btn btn-light border-button enroll-now-btn text-white fs-2">
              Enroll Now{" "}
              <i className="fa fa-arrow-right fs-4" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


const OurInitiativeTabs = () => {
  return (
      <Tabs
        defaultActiveKey="01"
        id="our-initiative"
        className="my-4 border-0"
      >
        <Tab eventKey="01" title="01">
          <div>
            <div className="row pb-lg-5">
              <div className="col-12 col-md-6 px-3 px-md-4">
                <img src={biharAsmitaFoundation} alt="" width="100%" />
              </div>
              <div className="col-12 col-md-6 my-3 my-md-1">
                <h4 className="font-neulis-mdm">
                  Bihar Asmita Foundation:
                  <br /> Honoring Heritage, Inspiring Future
                </h4>
                <p>
                  The Bihar Asmita Foundation is at the heart of preserving and
                  promoting Bihar’s cultural and historical significance.
                  Through initiatives like the annual{" "}
                  <strong>Bihar Asmita Diwas</strong>, we unite the global
                  Bihari community to celebrate achievements and instill pride.
                </p>
                <p>
                  <strong>Preserving Pride:</strong> Highlighting Bihar’s
                  spiritual, cultural, and historical importance on a global
                  stage.
                </p>
                <p>
                  <strong>Inspiring Generations:</strong> Honoring excellence to
                  motivate the youth to contribute to Bihar’s future.
                </p>
                <p className="text-brown">
                  “Our heritage is not just our past; it’s the foundation for a
                  brighter tomorrow.”
                </p>
              </div>
            </div>
            <div className="row pt-lg-5 pb-4 pb-md-1">
              <div className="col-12 col-md-6 my-3 my-md-1">
                <h3 className="biaHeading">Organizational Structure:</h3>
                <h4 className="font-neulis-mdm mb-5">
                  BITO will have a well-defined organizational structure
                  comprising the following elements:
                </h4>
                <p>
                  <strong>A. Board of Directors:</strong> A group of experienced
                  and prominent business leaders who will provide strategic
                  guidance and direction to BITO.
                </p>
                <p>
                  <strong>B. Executive Committee:</strong> Responsible for
                  day-to-day operations, decision-making, and implementation of
                  BITO's initiatives.
                </p>
                <p>
                  <strong>C. Sector-Specific Committees:</strong> Specialized
                  committees focusing on different sectors like agriculture,
                  manufacturing, IT, healthcare, etc., to address the unique
                  challenges and opportunities in each sector.
                </p>
                <p>
                  <strong>D. Regional Chapters:</strong> To ensure effective
                  coordination and representation across different regions of
                  Bihar and other countries, BITO will establish regional
                  chapters.
                </p>
              </div>
              <div className="col-12 col-md-6 px-3 px-md-4">
                <img src={organizationalStructure} alt="" width="100%" />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="02" title="02">
          <div>
            <h4>02</h4>
            <p>This is the content for the 02 tab.</p>
          </div>
        </Tab>
        <Tab eventKey="03" title="03">
          <div>
            <h4>03</h4>
            <p>This is the content for the 03 tab.</p>
          </div>
        </Tab>
        <Tab eventKey="04" title="04">
          <div>
            <h4>04</h4>
            <p>This is the content for the 04 tab.</p>
          </div>
        </Tab>
        <Tab eventKey="05" title="05">
          <div>
            <h4>05</h4>
            <p>This is the content for the 05 tab.</p>
          </div>
        </Tab>
        <Tab eventKey="06" title="06">
          <div>
            <h4>06</h4>
            <p>This is the content for the 06 tab.</p>
          </div>
        </Tab>
        <Tab eventKey="07" title="07">
          <div>
            <h4>07</h4>
            <p>This is the content for the 07 tab.</p>
          </div>
        </Tab>
      </Tabs>
  );
};
