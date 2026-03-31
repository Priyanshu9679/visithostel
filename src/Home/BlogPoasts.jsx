import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

import BlogPoastsProps from "./BlogPoastsProps";

const BlogPoasts = () => {
  return (
    <>
      <div className="blog-outer">
        <div className="container">
          <h2>Latest blog posts</h2>
          <div className="blog-inner">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              modules={[Autoplay, Pagination]}
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
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <BlogPoastsProps
                  address={"assets/image/blog-posts1.jpg"}
                  alter={"one"}
                  first={"How to save a lot when traveling worldwide"}
                  sec={"May 17, 2023"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogPoastsProps
                  address={"assets/image/blog-posts2.jpg"}
                  alter={"two"}
                  first={"Best Days to Stay "}
                  firsts={"in Los Angeles"}
                  sec={"May 12, 2023"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogPoastsProps
                  address={"assets/image/blog-posts1.jpg"}
                  alter={"three"}
                  first={"How to save a lot when traveling worldwide"}
                  sec={"May 17, 2023"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogPoastsProps
                  address={"assets/image/blog-posts2.jpg"}
                  alter={"two"}
                  first={"Best Days to Stay "}
                  firsts={"in Los Angeles"}
                  sec={"May 12, 2023"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPoasts;
