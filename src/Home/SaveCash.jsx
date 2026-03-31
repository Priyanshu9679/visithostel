import { Link } from "react-router-dom";

const SaveCash = () => {
  return (
    <>
      <div className="save-cash-outer">
        <div className="save-cash-inner">
          <div className="save-cash-item" >
            <div className="save-cash-image">
              <img
                src="assets/image/save-cash1.jpg"
                alt="Save Cash"
              />
            </div>
            <div className="save-cash-info">
              <div className="save-cash-first">save cash for fun</div>
              <div className="save-cash-sec">
                With our hostel, you can save a lot of money on accommodation
                <br />
                throughout the year to enjoy your stay at our city.
              </div>
              <Link to="/" className="save-cash-third">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveCash;
