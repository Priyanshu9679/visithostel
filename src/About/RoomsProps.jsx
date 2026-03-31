import { Link } from "react-router-dom";

const RoomsProps = (romp) => {
  return (
    <>
      <div className="rooms-a-item">
        <div className="rooms-a-image-outer">
          <Link to="/" className="rooms-a-image">
            <img src={romp.address} alt={romp.alter} />
          </Link>
        </div>
        <div className="rooms-a-info">
          <Link to="/" className="rooms-a-first">
            {romp.first}
          </Link>
          <div className="rooms-a-sec">
            <div className="rooms-a-sec-l">{romp.price}</div>
            <div className="rooms-a-sec-r">/night</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsProps;
