import { useEffect } from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  useEffect(() => {
  const onScroll = () => {
    const width = window.innerWidth;
    let offset = 0;
    console.log(width);
    
    if (width <= 319) {
      offset = 2400;
    } else if (width <= 479) {
      offset = 2700;
    } else if (width <= 520) {
      offset = 2600;
    } else if (width <= 576) {
      offset = 2850;
    // } else if (width <= 576) {
    //   offset = 2700;
      } else if (width <= 639) {
        offset = 2200;
    } else if (width <= 648) {
      offset = 2100;
    // } else if (width <= 649) {
    //   offset = 2200;
    } else if (width <= 766) {
      offset = 2105;
    } else if (width <= 990) {
      offset = 1627;
    } else if (width <= 1199) {
      offset = 1425;
    } else {
      offset = 1240;
    }

    document.documentElement.style.setProperty(
      "--y",
      `${window.scrollY * 0.2 - offset}px`
    );
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <>
      <div className="discount-outer">
        <div className="discount-inner">
          <div className="discount-item">
            <div className="discount-image">
              <div className="discount-image-inner">
                <div className="discount-image-item">
                  <div className="discount-image-image"></div>
                </div>
              </div>
            </div>
            <div className="discount-info">
              <div className="discount-first">Sign Up for 25% Discount</div>
              <div className="discount-sec">
                Want to get an instant discount for your stay at our hostel?
                Leave your email and sign up for our newsletter with 25% off all
                our rooms.
              </div>
              <div className="discount-third">
                <input
                  type="email"
                  name=""
                  className="discount-inpu"
                  placeholder="Enter Your E-mail"
                />
                <Link className="discount-btn" to="/">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{height: "800px", backgroundColor: "red"}}></div> */}
    </>
  );
};

export default Discount;
