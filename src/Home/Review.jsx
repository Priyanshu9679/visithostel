import { Link } from "react-router-dom";

const Review = () => {
  return (
    <>
      <div className="review-outer">
        <div className="container">
          <h2>What people say</h2>
          <div className="review-inner">
            <div className="review-item">
              <div className="review-image">
                <Link to="/">
                  <img src="assets/image/review1.jpg" alt="one" />
                </Link>
              </div>
              <div className="review-content">
                I had a fantastic experience at this hostel; I was very
                impressed with the receptionists and housekeeping staff. Laureen
                was especially helpful during checking out after a busy week.
              </div>
              <Link to="/" className="review-name">
                jane wood
              </Link>
            </div>

            <div className="review-item">
              <div className="review-image">
                <Link to="/">
                  <img src="assets/image/review2.jpg" alt="two" />
                </Link>
              </div>
              <div className="review-content">
                The staff was wonderful! We had a very fun time in the city. I
                can't say enough nice things about the staff. They were all very
                pleasant and accommodating. We look forward to coming back here
                again.
              </div>
              <Link to="/" className="review-name">
                Catherine Williams
              </Link>
            </div>

            <div className="review-item">
              <div className="review-image">
                <Link to="/">
                  <img src="assets/image/review3.jpg" alt="three" />
                </Link>
              </div>
              <div className="review-content">
                Just want to say thank you and tell you how much my group of
                young people enjoyed the hostel this week. The staff was so very
                helpful and friendly. Thank you for all your help and assistance
                during our stay.
              </div>
              <Link to="/" className="review-name">
                Erica Peterson
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
