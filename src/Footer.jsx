import { Link } from "react-router-dom";

import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationArrow, FaXTwitter } from "react-icons/fa6";

import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-item footer-item-l">
                <h2>Contact us</h2>
                <ul className="paddi-lr">
                  <li className="footer-icon-pos ">
                    <MdCall className="footer-color-y footer-icons" />
                    <ul className="footer-list-l">
                      <li>
                        <Link to="/" className="footer-color-w footer-lists ">
                          +1 323-913-4688
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="footer-icon-pos ">
                    <MdEmail className="footer-color-y footer-icons" />
                    <ul className="footer-list-l">
                      <li>
                        <Link to="/" className="footer-color-w footer-lists ">
                          info@demolink.org
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="footer-icon-pos ">
                    <FaLocationArrow className="footer-color-y footer-icons" />
                    <ul className="footer-list-l mar-top">
                      <li>
                        <Link to="/" className="footer-color-w footer-lists ">
                          4730 Crystal Springs Dr,
                          <br /> Los Angeles, CA 90027
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="footer-item footer-item-c">
                <h2>Popular news</h2>
                <ul className="paddi-lr">
                  <li>
                    <ul>
                      <li>
                        <Link to="/" className="footer-color-y footer-lists">
                          Hostel or Hotel: What to
                          <br /> Choose and Why
                        </Link>
                      </li>
                      <li className="footer-color-g">May 04, 2023</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <Link to="/" className="footer-color-y footer-lists">
                          Our Guide for Travelers on
                          <br /> a Budget
                        </Link>
                      </li>
                      <li className="footer-color-g">May 04, 2023</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="footer-item footer-item-r">
                <h2>Quick links</h2>
                <ul className="footer-list">
                  <li>
                    <ul className="footer-list-l">
                      <li>
                        <Link to="/" className="footer-color-w footer-lists">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="footer-color-w footer-lists">
                          Our Rooms
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="footer-color-w footer-lists">
                          Our Team
                        </Link>
                      </li>
                    </ul>
                    <ul className="footer-list-r">
                      <li>
                        <Link to="/" className="footer-color-w footer-lists">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="footer-color-w footer-lists">
                          Gallery
                        </Link>
                      </li>
                    </ul>
                    <ul className="footer-list-b">
                      <li>
                        <Link to="/" className="footer-color-w footer-btn-l">
                          Book Now
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="footer-btn-r">
                          Get in touch
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-item-l">
                © 2026 Visit Hostel. All rights reserved{" "}
              </div>
              <div className="footer-item-c">
                <ul>
                  <li>
                    <Link to="/" className="footer-color-g">
                      <FaFacebookF className="footer-icon-color" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-color-g">
                      <FaXTwitter className="footer-icon-color" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-color-g footer-margin-top">
                      <FaGooglePlusG className="footer-icon-color" size={21} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-color-g">
                      <FaInstagram className="footer-icon-color" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-item-r">
                <Link to="/" className="footer-color-g footer-font-f">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
