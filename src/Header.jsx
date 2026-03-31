import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NavLink, useLocation, Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { ImArrowLeft2 } from "react-icons/im";
import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaRegClock  } from "react-icons/fa6";
import { IoIosArrowDown, IoIosCall  } from "react-icons/io";  

import "swiper/css";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // NEW: State to track which mobile dropdowns are open
  const [openDropdowns, setOpenDropdowns] = useState({
    rooms: false,
    blog: false,
    pages: false,
  });

  // NEW: Function to toggle specific dropdowns
  const toggleDropdown = (e, menuName) => {
    e.preventDefault(); // Prevents the link from navigating right away
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <>
      <div className="header-outer">
        <div className="header-top">
          <div className="container">
            <div className="header-inner">
              <div className="header-menu ">
                <div 
                  className="header-menu-icon" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  style={{ cursor: "pointer" }}
                >
                  <SlMenu className="header-icon-menu" />
                  <ImArrowLeft2 className="header-icon-arrow" />
                </div>

                {isMobileMenuOpen && (
                  <div className="header-side-sub-m">
                    <div className="header-s-icons">
                      <Link to="/" className="header-s-icon-tag"><FaFacebookF className="header-s-icon" /></Link>
                      <Link to="/" className="header-s-icon-tag"><FaXTwitter className="header-s-icon" /></Link>
                      <Link to="/" className="header-s-icon-tag"><FaGooglePlusG className="header-s-icon" /></Link>
                      <Link to="/" className="header-s-icon-tag"><FaInstagram className="header-s-icon" /></Link>
                    </div>

                    <ul className="header-s-left">
                      <li>
                        <NavLink to="/" className={({ isActive }) => "nav-main " + (isActive ? "active" : "")} onClick={() => setIsMobileMenuOpen(false)}>
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" className={({ isActive }) => "nav-main " + (isActive ? "active" : "")} onClick={() => setIsMobileMenuOpen(false)}>
                          About Us
                        </NavLink>
                      </li>

                      {/* ROOMS DROPDOWN */}
                      <li>
                        <NavLink 
                          to="/room" 
                          className={({ isActive }) => "nav-main " + (isActive || location.pathname === "/doublerooms" ? "active" : "")}
                          
                        >
                          <IoIosArrowDown className={`header-s-arrow ${openDropdowns.rooms ? "rotate" : ""}`} onClick={(e) => toggleDropdown(e, "rooms")} />
                          Rooms
                        </NavLink>
                        {openDropdowns.rooms && (
                          <ul className="header-sub-menu-mobile">
                            <li><NavLink to="/doublerooms" onClick={() => setIsMobileMenuOpen(false)}>Double Room</NavLink></li>
                          </ul>
                        )}
                      </li>

                      {/* BLOG DROPDOWN */}
                      <li>
                        <NavLink 
                          to="/blog" 
                          className={({ isActive }) => "nav-main " + (isActive || location.pathname === "/classicblog" ? "activel" : "")}
                        >
                          <IoIosArrowDown className={`header-s-arrow ${openDropdowns.blog ? "rotate" : ""}`} onClick={(e) => toggleDropdown(e, "blog")} />
                          Blog
                        </NavLink>
                        {openDropdowns.blog && (
                          <ul className="header-sub-menu-mobile">
                            <li><NavLink to="/classicblog" onClick={() => setIsMobileMenuOpen(false)}>Classic Blog</NavLink></li>
                            <li><Link to="/gridblog">Grid Blog</Link></li>
                            <li><Link to="/gridblog2">Grid Blog 2</Link></li>
                            <li><Link to="/gridblog3">Grid Blog 3</Link></li>
                            <li><Link to="/blogpost">Blog Post</Link></li>
                          </ul>
                        )}
                      </li>

                      <li>
                        <NavLink to="/contact" className={({ isActive }) => "nav-main " + (isActive ? "activel" : "")} onClick={() => setIsMobileMenuOpen(false)}>
                          Contact Us
                        </NavLink>
                      </li>

                      {/* PAGES DROPDOWN */}
                      <li>
                        <NavLink 
                          to="/" 
                          className={({ isActive }) => "nav-main " + (isActive ? "activel" : "")}
                        >
                          <IoIosArrowDown className={`header-s-arrow ${openDropdowns.pages ? "rotate" : ""}`} onClick={(e) => toggleDropdown(e, "pages")}   />
                          Pages
                        </NavLink>
                        {openDropdowns.pages && (
                          <ul className="header-sub-menu-mobile">
                            <li><Link to="#">Typography</Link></li>
                            <li><Link to="#">Buttons</Link></li>
                            <li><Link to="#">Forms</Link></li>
                            <li><Link to="#">Grid Gallery</Link></li>
                            <li><Link to="#">Our Team</Link></li>
                            <li><Link to="#">404 Page</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* ... Rest of your desktop header code stays exactly the same ... */}
              <div className="header-logo">
                <img src="/assets/image/header-logo.png" alt="Logo" />
              </div>
              <div className="header-item-contact">

                <div className="header-item-time">
                  <FaRegClock className="clock-icon" />09:00<span>am</span> —
                  05:00<span>pm</span>
                </div>
                <div className="header-item-call">
                  <IoIosCall  className="call-icon" />+1 323-913-4688
                </div>
                <div className="header-item-btn">
                  <Link to="/">BOOK NOW</Link>
                </div>
              </div>
              <div className="header-item-btn dis-no">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              {/* </div> */}


                {/* ... */}
              </div>
            </div>
          </div>
        </div>

        
        <div className="header-bottom">
          <div className="container">
            <div className="header-inner">
              <ul className="header-item-left">
                <li>
                  <NavLink to="/" className={({ isActive }) => "nav-main " + (isActive ? "active" : "")}>HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => "nav-main " + (isActive ? "active" : "")}>ABOUT US</NavLink>
                </li>
                <li>
                  <NavLink to="/rooms" className={({ isActive }) => "nav-main " + (isActive || location.pathname === "/doublerooms" ? "active" : "")}>ROOMS</NavLink>
                  <ul className="header-sub-menu">
                    <li><NavLink to="/doublerooms">Double Room</NavLink></li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/blog" className={({ isActive }) => "nav-main " + (isActive || location.pathname === "/classicblog" || location.pathname === "/gridblog" || location.pathname === "/gridblog2" || location.pathname === "/gridblog3" || location.pathname === "/blogpost" ? "active" : "")}>BLOG</NavLink>
                  <ul className="header-sub-menu">
                    <li><NavLink to="/classicblog">Classic Blog</NavLink></li>
                    <li><NavLink to="/gridblog">Grid Blog</NavLink></li>
                    <li><NavLink to="/gridblog2">Grid Blog 2</NavLink></li>
                    <li><NavLink to="/gridblog3">Grid Blog 3</NavLink></li>
                    <li><NavLink to="/blogpost">Blog Post</NavLink></li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => "nav-main " + (isActive ? "active" : "")}>CONTACT US</NavLink>
                </li>
                <li>
                  <NavLink to="/" className={({ isActive }) => "nav-main " + (isActive ? "activel" : "")}>PAGES</NavLink>
                  <div className="header-sub-menu width">
                    <div className="header-list-sub-menu-l border-right">
                      <ul className="header-list-sub-menu-l-l">
                        <li><h3>ELEMENTS</h3></li>
                        <li><Link to="#">Typography</Link></li>
                        <li><Link to="#">Buttons</Link></li>
                        <li><Link to="#">Forms</Link></li>
                        <li><Link to="#">Tabs and Accordions</Link></li>
                      </ul>
                      <ul>
                        <li><h3 className="margin-top"> </h3></li>
                        <li><Link to="#">Counters</Link></li>
                        <li><Link to="#">Progress Bars</Link></li>
                        <li><Link to="#">Grid System</Link></li>
                      </ul>
                    </div>
                    <div className="header-list-sub-menu-c border-right">
                      <ul className="header-list-sub-menu-c-l">
                        <li><h3>Additional pages</h3></li>
                        <li><Link to="#">Grid Gallery</Link></li>
                        <li><Link to="#">Full width Gallery</Link></li>
                        <li><Link to="#">Masonry Gallery</Link></li>
                        <li><Link to="#">Full Width Masonry Gallery</Link></li>
                        <li><Link to="#">Our Team</Link></li>
                        <li><Link to="#">Testimonials</Link></li>
                      </ul>
                      <ul>
                        <li><h3 className="margin-top"> </h3></li>
                        <li><Link to="#">404 Page</Link></li>
                        <li><Link to="#">503 Page</Link></li>
                        <li><Link to="#">Coming Soon</Link></li>
                        <li><Link to="#">Contact Us 2</Link></li>
                        <li><Link to="#">What We Offer</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Search results</Link></li>
                      </ul>
                    </div>
                    <div className="header-list-sub-menu-r ">
                      <h3 className="margin-top margin-top">Our Rooms</h3>
                      <Swiper
                        className="header-slider"
                        spaceBetween={15}
                        slidesPerView={2}
                        modules={[Autoplay]}
                        autoplay={{ delay: 100, disableOnInteraction: false }}
                      >
                        <SwiperSlide><img src="/assets/image/header-slider1.jpg" alt="one" /></SwiperSlide>
                        <SwiperSlide><img src="/assets/image/header-slider2.jpg" alt="two" /></SwiperSlide>
                        <SwiperSlide><img src="/assets/image/header-slider3.jpg" alt="three" /></SwiperSlide>
                        <SwiperSlide><img src="/assets/image/header-slider4.jpg" alt="four" /></SwiperSlide>
                        <SwiperSlide><img src="/assets/image/header-slider5.jpg" alt="five" /></SwiperSlide>
                        <SwiperSlide><img src="/assets/image/header-slider6.jpg" alt="six" /></SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="header-item-right">
                <li><Link to="/" className="header-s-icon-tag"><FaFacebookF className="header-s-icon" /></Link></li>
                <li><Link to="/" className="header-s-icon-tag"><FaXTwitter className="header-s-icon" /></Link></li>
                <li><Link to="/" className="header-s-icon-tag"><FaGooglePlusG className="header-s-icon header-s-icon-google" /></Link></li>
                <li><Link to="/" className="header-s-icon-tag"><FaInstagram className="header-s-icon" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;