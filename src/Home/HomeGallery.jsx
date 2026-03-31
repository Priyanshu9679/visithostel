import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomeGalleryProps from "./HomeGalleryProps";

import "swiper/css";

const HomeGallery = () => {
  return (
    <>
      <div className="home-gallery-outer">
        <div className="home-gallery-headding">
          <h2>Gallery</h2>
        </div>
        <div className="home-gallery-inner">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <HomeGalleryProps
                address={"assets/image/home-gallery1.jpg"}
                alter={"one"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeGalleryProps
                address={"assets/image/home-gallery2.jpg"}
                alter={"two"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeGalleryProps
                address={"assets/image/home-gallery3.jpg"}
                alter={"three"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeGalleryProps
                address={"assets/image/home-gallery4.jpg"}
                alter={"four"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeGalleryProps
                address={"assets/image/home-gallery5.jpg"}
                alter={"five"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeGalleryProps
                address={"assets/image/home-gallery6.jpg"}
                alter={"six"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeGalleryProps
                address={"assets/image/home-gallery7.jpg"}
                alter={"seven"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeGallery;
