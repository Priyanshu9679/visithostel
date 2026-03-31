import { IoStar, IoStarHalf } from "react-icons/io5";
import { Link } from "react-router-dom";

const RoomsProps = (rp) => {
  return (
    <>
      <div className="rooms-item">
        <div className="rooms-left">
          <div className="rooms-image">
            <Link to="/">
              <img src={rp.address} alt={rp.alter} />
            </Link>
          </div>
        </div>
        <div className="rooms-right">
          <div className="rooms-info">
            <Link to="/" className="rooms-first">
              {rp.first}
            </Link>
            <div className="rooms-sec">
              <IoStar className="rooms-star" />
              <IoStar className="rooms-star" />
              <IoStar className="rooms-star" />
              <IoStar className="rooms-star" />
              <IoStarHalf className="rooms-star" />
              <Link to="/">4 customer reviews</Link>
            </div>
            <div className="rooms-third">{rp.third}</div>
            <Link to="/" className="rooms-four">
              more info
            </Link>
            <div className="rooms-rent">
              <span className="rooms-price">{rp.price}</span>
              <br />
              <span className="rooms-time">/night</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsProps;
