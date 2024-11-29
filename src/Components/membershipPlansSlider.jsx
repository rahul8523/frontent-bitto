/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MembershipPlansSlider = ({ plans }) => {
  return (
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
        className="mySwiper p-0"
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            {" "}
            <div
              key={index}
              className={`col-12 biaBorder biaMembershipCard ${
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
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default MembershipPlansSlider;
