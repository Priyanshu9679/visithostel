import { Link } from "react-router-dom";

const SliderProps = (slipop) => {
  return (
    <>
      <div className="slider-outer">
        <div className="slider-inner">
          <div className="slider-item">
            <div
              className="slider-image"
              style={{ backgroundImage: `url(${slipop.address})` }}
            ></div>
            <div className="slider-info">
              <div className="slider-first">{slipop.first}</div>
              <ul className="slider-sec">
                <li>
                  <Link to="/" className="slider-color-y">
                    {slipop.li1}
                  </Link>
                </li>
                <li>/</li>
                <li style={{ display: slipop.disno }}>
                  <Link to={slipop.pagename} className="slider-color-y">
                    {slipop.li2}
                  </Link>
                </li>
                <li style={{ display: slipop.disno }}>/</li>
                <li>{slipop.li3}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderProps;
