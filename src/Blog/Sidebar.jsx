import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { BsQuote } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="post-classic-search">
        <input
          type="text"
          name=""
          id=""
          className="post-classic-input-search"
          placeholder="Search the blog..."
        />
        <IoIosSearch className="post-classic-input-search-icon" />
      </div>
      <div className="post-classic-item">
        <h2>Categories</h2>
        <div className="post-classic-item-inner">
          <ul>
            <li>
              <div className=""></div>
              <Link to="/" className="post-classic-decor color-b">
                See All
              </Link>
            </li>
            <li>
              <div className=""></div>
              <Link to="/" className="post-classic-decor">
                Hostel
              </Link>
            </li>
            <li>
              <div className=""></div>
              <Link to="/" className="post-classic-decor">
                Services
              </Link>
            </li>
            <li>
              <div className=""></div>
              <Link to="/" className="post-classic-decor">
                Rooms
              </Link>
            </li>
            <li>
              <div className=""></div>
              <Link to="/" className="post-classic-decor">
                Amenities
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-classic-item">
        <h2>Popular posts</h2>
        <div className="post-classic-item-inner">
          <div className="post-classic-popular">
            <img src="assets/image/post-sidebar1.jpg" alt="one" />
            <Link to="/" className="post-classic-popular-text">
              5 Amenities That Every Hostel Should Have
            </Link>
          </div>
          <div className="post-classic-popular">
            <img src="assets/image/post-sidebar2.jpg" alt="two" />
            <Link to="/" className="post-classic-popular-text">
              A Perfect Hostel: Does it Exist?
            </Link>
          </div>
        </div>
      </div>
      <div className="post-classic-item">
        <h2>Comments</h2>
        <div className="post-classic-item-inner">
          <div className="post-classic-comment">
            <BsQuote className="post-classic-comment-decor" />
            <div className="post-classic-first">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            </div>
            <div className="post-classic-sec">Jessica Brown on</div>
            <Link to="/" className="post-classic-third">
              10 Tips on Choosing a Hostel
            </Link>
          </div>
          <hr className="post-classic-decor" />
          <div className="post-classic-comment">
            <BsQuote className="post-classic-comment-decor" />
            <div className="post-classic-first">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper
            </div>
            <div className="post-classic-sec">Adam Williams on</div>
            <Link to="/" className="post-classic-third">
              Popular Hostels in Europe
            </Link>
          </div>
        </div>
      </div>
      <div className="post-classic-item">
        <h2>Popular tags</h2>
        <div className="post-classic-item-inner">
          <ul className="dis-f">
            <li>
              <Link to="/" className="fill-color ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                >
                  <path d="M0,0v6c4.142,0,7.5,3.358,7.5,7.5S4.142,21,0,21v6h16V0H0z" />
                </svg>
                <span className="bgc-w">Hostels</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="fill-color ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                >
                  <path d="M0,0v6c4.142,0,7.5,3.358,7.5,7.5S4.142,21,0,21v6h16V0H0z" />
                </svg>
                <span className="bgc-w">News</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="fill-color ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                >
                  <path d="M0,0v6c4.142,0,7.5,3.358,7.5,7.5S4.142,21,0,21v6h16V0H0z" />
                </svg>
                <span className="bgc-w">Articles</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="fill-color ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                >
                  <path d="M0,0v6c4.142,0,7.5,3.358,7.5,7.5S4.142,21,0,21v6h16V0H0z" />
                </svg>
                <span className="bgc-w">Rooms</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="fill-color ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                >
                  <path d="M0,0v6c4.142,0,7.5,3.358,7.5,7.5S4.142,21,0,21v6h16V0H0z" />
                </svg>
                <span className="bgc-w">Tips</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-classic-item">
        <h2>Newsletter</h2>
        <div className="post-classic-item-inner">
          <div className="post-classic-email">
            <input type="email" placeholder="Enter Your E-mail" className="post-classic-input-subsc" />
            <Link to="/" className="post-classic-btn-subsc">Subscribe</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
