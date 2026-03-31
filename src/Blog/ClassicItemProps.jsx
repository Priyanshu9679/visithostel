import { Link } from "react-router-dom";

import { TbClockHour9, TbMessageCircle } from "react-icons/tb";

const ClassicItemProps = (cip) => {
  return (
    <>
      <div className="post-classic-item">
        <h2>
          <Link to="/" className="post-classic-title">{cip.title}</Link>{" "}
        </h2>
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
              <span className="bgc-y">{cip.category}</span>
              
            </Link>
          </li>
          <li>
            <TbMessageCircle className="post-classic-icon color-g" />{" "}
            <Link to="/" className="color-b text-decor hover-color-y">{cip.comment}</Link>
          </li>
          <li className="color-b">
            <TbClockHour9 className="post-classic-icon color-g" /> {cip.date}
          </li>
          <li className="color-g">
            BY <Link to="/" className="color-y text-decor text-tran-u">{cip.author}</Link>
          </li>
        </ul>
        <div className="post-classic-image" style={{display:`${cip.dnone}`}}>
          <Link to="/">
            <img src={cip.address} alt={cip.alter} />
          </Link>
        </div>
        <div className="post-classic-image-three" style={{display:`${cip.threednone}`}}>
          <div className="post-classic-image-three-left">
            <Link to="/">
              <img src={cip.image1} alt={cip.alter1} />
            </Link>
            </div>
            <div className="post-classic-image-three-right">
            <Link to="/" className="post-classic-image-r marg-bot">
              <img src={cip.image2} alt={cip.alter2} />
            </Link>
            <Link to="/" className="post-classic-image-r ">
              <img src={cip.image3} alt={cip.alter3} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassicItemProps;
