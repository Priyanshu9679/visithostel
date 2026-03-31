const WhatWeOfferProps = (ww) => {
  return (
    <>
      <div className="what-we-offer-item">
        <div className="what-we-offer-image">
          <svg
            width="74"
            height="75"
            viewBox="0 0 90 80"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon
              points="45,2 78,20 78,60 45,78 12,60 12,20"
              fill="#f5f5f5"
            />
          </svg>
          <div className="what-we-offer-icons">{ww.icons}</div>
        </div>
        <div className="what-we-offer-info">
          <div className="what-we-offer-first">{ww.first}</div>
          <div className="what-we-offer-sec">{ww.sec}</div>
        </div>
      </div>
    </>
  );
};
export default WhatWeOfferProps;
