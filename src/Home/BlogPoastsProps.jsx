import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogPoastsProps = (blog) => {
  return (
    <>
      <div className="blog-item">
        <div className="blog-image">
          <div className="blog-link-image">
            <Link to="/" className="blog-link">
              <img src={blog.address} alt={blog.alter} />
            </Link>
          </div>
        </div>
        <div className="blog-info">
          <div className="blog-first">
            <Link to="/" className="blog-first-link">
              {blog.first}
            </Link>
          </div>
          <div className="blog-first">
            <Link to="/" className="blog-first-link">
              {blog.firsts}
            </Link>
          </div>
          <div className="blog-sec">{blog.sec}</div>
          <div className="blog-third">
            <Link to="/" className="blog-icons blog-icons-delay-1">
              <FaFacebookF />
            </Link>
            <Link to="/" className="blog-icons blog-icons-delay-2">
              <FaXTwitter />
            </Link>
            <Link to="/" className="blog-icons blog-icons-delay-3">
              <FaGooglePlusG />
            </Link>
            <Link to="/" className="blog-icons blog-icons-delay-4">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPoastsProps;
