import {
  biaAbout,
  biaActivity1,
  biaActivity2,
  biaActivity3,
  biaActivity4,
  biaActivity5,
  biaForward1,
  biaForward2,
  biaForward3,
  biaForward4,
  biaForward5,
  biaForward6,
  biaIcon1,
  biaIcon10,
  biaIcon11,
  biaIcon12,
  biaIcon2,
  biaIcon3,
  biaIcon4,
  biaIcon5,
  biaIcon6,
  biaIcon7,
  biaIcon8,
  biaIcon9,
  biaMission,
  biaObjective1,
  biaObjective2,
  biaObjective3,
  biaObjective4,
  biaVision,
} from "../assets/bia";
import MembershipPlansSlider from "../Components/membershipPlansSlider";
import OurChaptersSlider from "../Components/OurChaptersSlider";
import "./bia.css";

const BIA = () => {
  const content = [
    { imgSrc: biaIcon1, text: "Business Connects & <br> Meets" },
    { imgSrc: biaIcon2, text: "Market & product <br> Acces" },
    { imgSrc: biaIcon3, text: "Industry <br> Voice" },
    { imgSrc: biaIcon4, text: "Fostering <br> Innovation" },
    { imgSrc: biaIcon5, text: "Government Scheme <br> Awareness" },
    { imgSrc: biaIcon6, text: "Propelling Industrial <br> Development" },
    {
      imgSrc: biaIcon7,
      text: "Sustainable Growth - <br> Aligned with 17 SDGs of UN",
    },
  ];

  const objectives = [
    { imgSrc: biaObjective1, text: "Promoting Industrial\nDevelopment" },
    { imgSrc: biaObjective2, text: "Fostering\nInnovation" },
    { imgSrc: biaObjective3, text: "Industry Voice\n& Policy Support" },
    { imgSrc: biaObjective4, text: "Sustainable\nPractices" },
  ];

  const activities = [
    {
      imgSrc: biaActivity1,
      title: "Industry Connect and Collaboration",
      details: [
        {
          label: "Networking Events",
          text: "Connect with industry leaders and government officials.",
        },
        {
          label: "Seminars and Workshops",
          text: "Engage in discussions on industry advancements and challenges.",
        },
      ],
    },
    {
      imgSrc: biaActivity2,
      title: "Training and Skill Development",
      details: [
        {
          label: "Training Programs",
          text: "Tailored programs to enhance the skills of industry professionals.",
        },
        {
          label: "Skill Development Initiatives",
          text: "Projects aimed at improving capabilities and industry standards",
        },
      ],
    },
    {
      imgSrc: biaActivity3,
      title: "Research and Development Support",
      details: [
        {
          label: "R&D Activities",
          text: "Encourage and support research initiatives for technological advancements.",
        },
        {
          label: "Industry Competitiveness",
          text: "Facilitate resources to maintain and boost industry competitiveness.",
        },
      ],
    },
    {
      imgSrc: biaActivity4,
      title: "Sustainability Initiatives",
      details: [
        {
          label: "Energy Efficiency",
          text: "Promote practices that reduce energy consumption.",
        },
        {
          label: "Waste Management",
          text: "Advocate for effective waste management solutions.",
        },
        {
          label: "Eco-Friendly Technologies",
          text: "Adoption of environmentally friendly technologies.",
        },
      ],
    },
    {
      imgSrc: biaActivity5,
      title: "Industry Voice & Advocacy",
      details: [
        {
          label: "Policy Representation",
          text: " Act as a collective voice for industries in discussions with government authorities, ensuring that the needs and concerns of the industrial sector are effectively communicated and addressed.",
        },
        {
          label: "Advocacy for Policy Changes",
          text: "Work actively to influence and shape industrial policies and regulations, advocating for changes that benefit the industry and create a more conducive business environment.",
        },
        {
          label: "Stakeholder Engagement",
          text: "Engage with key stakeholders, including policymakers, regulatory bodies, and industry groups, to build support for initiatives and policies that drive industrial growth and innovation.",
        },
      ],
    },
  ];

  const differentiator = [
    { imgSrc: biaIcon8, text: "BITO Voice" },
    { imgSrc: biaIcon9, text: "Industry Voice" },
    {
      imgSrc: biaIcon10,
      text: "Global Chapters in 25 <br> Countries across globe",
      class: "flex-grow-1 flex-shrink-1",
    },
    {
      imgSrc: biaIcon11,
      text: "Chaired by Visionary Leader <br> Shri Chirag Paswan Ji",
      class: "flex-grow-1 flex-shrink-1",
    },
    { imgSrc: biaIcon12, text: "BITO Jobs" },
  ];

  const forwardItems = [
    {
      imgSrc: biaForward1,
      label: "Infrastructure Investment",
      description: "Address the need for improved industrial infrastructure.",
    },
    {
      imgSrc: biaForward2,
      label: "Strengthening Partnerships",
      description:
        "Build and reinforce partnerships with both public and private sector stakeholders.",
    },
    {
      imgSrc: biaForward3,
      label: "Regulatory Hurdles",
      description:
        "Navigate and overcome challenges related to regulations and policies.",
    },
    {
      imgSrc: biaForward4,
      label: "Expanding Membership",
      description:
        "Increase membership to include a diverse range of industry players.",
    },
    {
      imgSrc: biaForward5,
      label: "Equitable Growth",
      description:
        "Ensure fair distribution of benefits across various regions.",
    },
    {
      imgSrc: biaForward6,
      label: "Policy Advocacy",
      description:
        "Continue to advocate for favourable policies that support industrial growth and sustainability.",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "15,000",
      features: [
        "Business Meets",
        "Seminars & Workshops",
        "Funding opportunities",
        "Industry Voice",
        "-",
        "-",
        "Business Consultations",
        "-",
        "-",
        "-",
      ],
    },
    {
      name: "Silver",
      price: "25,000",
      features: [
        "Business Meets",
        "Seminars & Workshops",
        "Funding opportunities",
        "Industry Voice",
        "-",
        "VIP Event Invitations",
        "Business Consultations",
        "-",
        "-",
        "-",
      ],
    },
    {
      name: "Gold",
      price: "50,000",
      features: [
        "Business Meets",
        "Seminars & Workshops",
        "Funding opportunities",
        "Industry Voice",
        "-",
        "VIP Event Invitations",
        "Business Consultations",
        "Policy Advocacy Support",
        "Featured Industry Profile",
        "-",
      ],
      isRecommended: true,
    },
    {
      name: "Platinum",
      price: "100,000",
      features: [
        "Business Meets",
        "Seminars & Workshops",
        "Funding opportunities",
        "Industry Voice",
        "Exclusive Dinner with Higherups",
        "VIP Event Invitations",
        "Business Consultations",
        "Policy Advocacy Support",
        "Featured Industry Profile",
        "Leadership Opportunities",
      ],
    },
  ];

  return (
    <div>
      {/* Home Banner */}
      <section className="h-75 bia-img">
        <div className="container">
          <div className="">
            <h2 className="text-white" style={{ fontSize: "72px" }}>
              Welcome to the <br /> BITO Industries Association <br />{" "}
              &#40;BIA&#41;
            </h2>
            <button className="px-4 py-2 btn btn-light mt-sm-5 border-button">
              Become a Member{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="container py-3 py-md-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={biaAbout} alt="" width="100%" />
          </div>
          <div className="col-12 col-md-6 my-3 my-md-1">
            <h3 className="biaHeading">About BIA</h3>
            <p>
              The BITO Industries Association is committed to creating
              industrial ecosystem that encourages growth, innovation, Market
              Linkages and sustainability. As an integral part of BITO, our
              primary aim is to facilitate collaboration among industries,
              government bodies, and other stakeholders to propel industrial
              advancement and strengthen presence in the global economic
              landscape.
            </p>
            <p>
              The BITO Industries Association (BIA) is dedicated to fostering a
              thriving industrial environment through:
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-md-5">
          {content.map((item, index) => (
            <div
              className="d-flex flex-column align-items-center biaBorder biaBorderSize text-wrap"
              key={index}
            >
              <img src={item.imgSrc} alt="" height={50} width={50} />
              <div className="text-center pt-2">
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="brownBG">
        <div className="container p-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-3 py-3">
                <img src={biaVision} alt="" width={70} height={70} className="biaVisionMissionImg"/>
                <h4 className="biaHeading">Vision</h4>
              </div>
              <p>
                To be catalyst for industrial excellence and sustainable
                development while promoting innovation and collaboration among
                the industries, government and stakeholders for a sustainable
                ecosystem.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-3 py-3">
                <img src={biaMission} alt="" width={70} height={70} className="biaVisionMissionImg"/>
                <h4 className="biaHeading">Mission</h4>
              </div>
              <p>
                Create opportunities for market expansion, bridge gaps between
                industries, government, and stakeholders, and support for
                meaningful policy changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container d-flex flex-column align-items-center pt-5 py-md-5">
        <h3 className="biaHeading">Our Objectives</h3>
        <div className="row my-4">
          {objectives.map((objective, index) => (
            <div key={index} className="col-6 col-md-3 p-0 position-relative">
              <img
                src={objective.imgSrc}
                alt={`Objective ${index + 1}`}
                width="100%"
                className="img-fluid"
              />
              <div className="text-white position-absolute bottom-0 start-0 w-100 p-4">
                <p>
                  {objective.text.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lightBrownBG">
        <div className="container d-flex flex-column align-items-center py-5">
          <h3 className="biaHeading">Key Activities</h3>
          <div className="mt-3">
            <div className="row">
              {activities.map((activity, index) => {
                const isLastItem = index === activities.length - 1;
                const isLastItemOdd =
                  activities.length % 2 !== 0 &&
                  index === activities.length - 1;
                return (
                  <div
                    key={index}
                    className={`d-flex flex-wrap flex-md-nowrap col-12 ${
                      isLastItemOdd ? "col-md-12" : "col-md-6"
                    } py-4 gap-4 ${!isLastItem ? "biaBorderBottom" : ""}`}
                  >
                    <img
                      src={activity.imgSrc}
                      alt={activity.title}
                      className="activityImg"
                    />
                    <div
                      className={`keyActivityContent ${
                        !isLastItem ? "" : "mw-100"
                      }`}
                    >
                      <h4
                        dangerouslySetInnerHTML={{ __html: activity.title }}
                        className="mb-3"
                      />
                      {activity.details.map((item, i) => (
                        <p key={i}>
                          <span className="textBrown">{item.label}:</span>{" "}
                          {item.text}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container d-flex flex-column align-items-center py-5 biaPlans">
        <h4 className="biaHeading text-center">Membership Plans</h4>
        <h6>Explore our various levels of industry engagement and benefit.</h6>
        <div className="row mt-4 w-100 d-none d-md-flex">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`col-6 col-md-3 biaBorder biaMembershipCard ${
                plan.isRecommended ? "recommended" : ""
              }`}
              style={{ position: "relative" }}
            >
              {plan.isRecommended && (
                <div
                  className="recommended-label text-white text-center mediumBrownBG"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    padding: "5px 0",
                    zIndex: 1,
                  }}
                >
                  Recommended
                </div>
              )}

              <div className="text-center pt-5">
                <h3>{plan.name}</h3>
                <h4>
                  <sup>₹</sup>
                  <span>{plan.price}</span> /yearly
                </h4>
              </div>
              <ul className="p-2 p-md-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="row mt-4 w-100 d-block d-md-none">
          <MembershipPlansSlider plans={plans} />
        </div>
        <h4 className="mt-5 biaHeading text-center">Our Differentiator</h4>
        <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 mt-5">
          {differentiator.map((item, index) => (
            <div
              className={`d-flex flex-column align-items-center biaDifferentiator biaBorder text-wrap w-45 ${item?.class}`}
              key={index}
            >
              <img src={item.imgSrc} alt="" height={50} width={50} />
              <div className="text-center pt-2">
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="d-flex flex-column align-items-center">
        <h4 className="biaHeading mb-5">Our Chapters</h4>
        <div className="row w-100">
        <OurChaptersSlider /></div>
      </div>

      <section className="container d-flex flex-column align-items-center py-5">
        <h4 className="biaHeading">Way Forward</h4>
        <div className="row pt-4">
          {forwardItems.map((item, index) => (
            <div
              key={index}
              className="d-flex col-12 col-md-6 py-2 py-md-3 gap-2 gap-md-4"
            >
              <img
                src={item.imgSrc}
                alt={item.label}
                className="biaForwardImg"
                height={100}
                width={200}
              />
              <div className="biaForwardContent">
                <p>
                  <b>
                    <span className="textBrown">{item.label}:</span>
                  </b>{" "}
                  <b>{item.description}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mediumBrownBG d-flex justify-content-center px-2 py-4 p-md-5 text-white text-center">
        <div>
          <div className="d-flex justify-content-center">
            <h4 className="biaSubFooter mb-4" style={{ maxWidth: "800px" }}>
              Be Part of the Transformation in the Global Industrial Sector
            </h4>
          </div>
          <p style={{ maxWidth: "1000px" }}>
            Join us in driving transformation and growth across the global
            industrial landscape. Whether you are an industry leader, investor,
            or community member, your engagement is crucial to our collective
            success and progress. Together, we can shape a dynamic and
            sustainable future for industries around the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BIA;
