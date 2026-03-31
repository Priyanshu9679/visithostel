import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DRoomsDetails = () => {
  return (
    <>
      <div className="d-rooms-outer">
        <div className="container">
          <div className="d-rooms-inner">
            <div className="d-rooms-item-l">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img src="assets/image/d-rooms1.jpg" alt="one" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/image/d-rooms2.jpg" alt="two" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/image/d-rooms3.jpg" alt="three" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="d-rooms-item-r">
              <div className="d-rooms-r-t">
                <h2>Double Room (private)</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="d-rooms-r-m">
                <p>
                  Type:<span>Private Room</span>
                </p>
                <p>
                  Amenities:<span>WC, TV set</span>
                </p>
                <p>
                  Free Wi-Fi:<span>Available</span>
                </p>
                <p>
                  A/C Unit:<span>Available</span>
                </p>
              </div>
              <div className="d-rooms-r-b">
                <p>
                  Share
                  <Link to="/" className="d-rooms-r-b-icon">
                    <FaFacebookF />
                  </Link>
                  <Link to="/" className="d-rooms-r-b-icon">
                    <FaXTwitter />
                  </Link>
                  <Link to="/" className="d-rooms-r-b-icon">
                    <FaGooglePlusG />
                  </Link>
                  <Link to="/" className="d-rooms-r-b-icon">
                    <FaInstagram />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DRoomsDetails;
