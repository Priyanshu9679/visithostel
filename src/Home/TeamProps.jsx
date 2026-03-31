import { Link } from "react-router-dom";

const TeamProps = (tp) => {
  return (
    <>
      <div className="team-item">
        <div className="team-image">
          <Link to="/">
            <img src={tp.address} alt={tp.alter} />
          </Link>
        </div>
        <svg
          width="270"
          height="70"
          viewBox="0 0 270 70"
          xmlns="http://www.w3.org/2000/svg"
          className="shape"
        >
          <path
            d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z"
            fill="#f7f7f7"
          />
        </svg>
        <div className="team-info">
          <Link to="/" className="team-first">{tp.first}</Link>
          <div className="team-sec">{tp.sec}</div>
          <Link to="/" className="team-third">
            +1 323-913-4688
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamProps;
