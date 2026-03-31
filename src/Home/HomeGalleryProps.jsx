import { FaSearchPlus } from "react-icons/fa";

const HomeGalleryProps = (hg) => {
  return (
    <>
      <div className="home-gallery-item">
        <img src={hg.address} alt={hg.alter} />
        <div className="home-gallery-info">
          <FaSearchPlus className="home-gallery-icon" />
        </div>
      </div>
    </>
  );
};

export default HomeGalleryProps;
