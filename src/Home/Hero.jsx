import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-slider-outer" style={{ height: "500px" }}>
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        style={{ height: "100%" }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="hero-slider-item">
            <img src="assets/image/hero-slider1.jpg" alt="One" />
            <div className="hero-slider-info">
              <div className="hero-slider-first">Welcome to Visit Hostel</div>
              <div className="hero-slider-sec">
                a special place where
                <br />
                you can stay and relax
              </div>
              <Link to="/" className="hero-slider-third">
                book now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slider-item">
            <img src="assets/image/hero-silder2.jpg" alt="Two" />
            <div className="hero-slider-info">
              <div className="hero-slider-first">
                Serving travelers on a budget
              </div>
              <div className="hero-slider-sec">
                We provide comfortable
                <br />
                accommodation for you
              </div>
              <Link to="/" className="hero-slider-third">
                book now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slider-item">
            <img src="assets/image/hero-slider3.jpg" alt="Three" />
            <div className="hero-slider-info">
              <div className="hero-slider-first">
                a perfect and affordable place to stay
              </div>
              <div className="hero-slider-sec">
                Take advantage of the budget
                <br />
                oriented accommodation
              </div>
              <Link to="/" className="hero-slider-third">
                book now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;