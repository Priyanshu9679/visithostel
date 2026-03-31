import { FaFacebookF, FaGooglePlusG, FaInstagram, FaQuoteLeft } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { TbClockHour9, TbMessageCircle } from "react-icons/tb"
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"

const BlogPostBlogDetails = () => {
    return (
        <>

            <div className="blogb-outer">
                <div className="container">
                    <div className="blogb-inner">
                        <div className="blogb-left">
                            <div className="blogb-left-t">
                                <h2>How to Save a Lot When Traveling Worldwide </h2>
                                <ul>
                                    <li>
                                        <Link to="/" className="color-w fill-color text-decor dis-flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="27"
                                                viewBox="0 0 16 27"
                                            >
                                                <path d="M0,0v6c4.142,0,7.5,3.358,7.5,7.5S4.142,21,0,21v6h16V0H0z" />
                                            </svg>
                                            <span className="bgc-y">News</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <TbMessageCircle className="post-classic-icon color-g" />
                                        <Link to="/" className="color-b text-decor hover-color-y">14</Link>
                                    </li>
                                    <li className="color-b">
                                        <TbClockHour9 className="post-classic-icon color-g" /> Nov, 30 2023
                                    </li>
                                    <li className="color-g">
                                        BY <Link to="/" className="color-y text-decor text-tran-u">Gavin Bell</Link>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                                <div className="blogb-left-t-image">
                                    <img src="assets/image/blog-post-detail1.jpg" alt="one" />
                                </div>
                                <div className="blogb-left-t-higlite">
                                    <FaQuoteLeft className="blogb-left-t-icon" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="blogb-left-t-share">
                                    <span className="blogb-left-t-share-l">
                                        Hostel, News, Article
                                    </span>
                                    <ul className="header-item-right">
                                        <li>SHARE</li>
                                        <li><Link to="/" className="header-s-icon-tag"><FaFacebookF className="header-s-icon" /></Link></li>
                                        <li><Link to="/" className="header-s-icon-tag"><FaXTwitter className="header-s-icon" /></Link></li>
                                        <li><Link to="/" className="header-s-icon-tag"><FaGooglePlusG className="header-s-icon header-s-icon-google" /></Link></li>
                                        <li><Link to="/" className="header-s-icon-tag"><FaInstagram className="header-s-icon" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blogb-left-b">
                                <h2>Add Your Comment</h2>
                                <input type="text" className="blogb-left-b-name" placeholder="Your Name" />
                                <input type="email" className="blogb-left-b-email" placeholder="Your E-mail" />
                                <textarea className="blogb-left-b-message" placeholder="Message"></textarea>
                                <div className="blogb-left-b-btn">
                                    <input type="button" value="Submit" />
                                </div>
                            </div>
                        </div>
                        <div className="blogb-right">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogPostBlogDetails