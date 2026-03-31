import WhatWeOfferProps from "./WhatWeOfferProps";

import { FaSnowflake, FaConciergeBell } from "react-icons/fa";
import { MdOutlineLocalLaundryService, MdOutlineIron } from "react-icons/md";
import { PiBowlSteamBold, PiBathtub } from "react-icons/pi";
import { IoWifi } from "react-icons/io5";
import { RiSafe3Line } from "react-icons/ri";

const WhatWeOffer = () => {
  return (
    <>
      <div className="what-we-offer-outer">
        <div className="container">
          <h2>what we offer</h2>
          <div className="what-we-offer-inner">
            <WhatWeOfferProps
              icons={<PiBowlSteamBold />}
              first={"Tea & Coffee"}
              sec={
                "You can always have some hot coffee & tea in our kitchen, available to all our clients."
              }
            />
            <WhatWeOfferProps
              icons={<PiBathtub />}
              first={"Hot Showers"}
              sec={
                "Visit Hostel is famous for clean and hot showers that you can have at any time of the day."
              }
            />
            <WhatWeOfferProps
              icons={<MdOutlineLocalLaundryService />}
              first={"Laundry"}
              sec={
                "Need to quickly wash your clothes? Our laundry is always at your service."
              }
            />
            <WhatWeOfferProps
              icons={<FaSnowflake />}
              first={"Air Conditioning"}
              sec={
                "All rooms at our hostel are equipped with reliable air conditioner systems."
              }
            />
            <WhatWeOfferProps
              icons={<IoWifi />}
              first={"Free Wi-Fi"}
              sec={
                "Our hostel is equipped with free high-speed Wi-Fi that is available 24/7 in all rooms."
              }
            />
            <WhatWeOfferProps
              icons={<FaConciergeBell />}
              first={"Kitchen"}
              sec={
                "Our kitchen provides a wide range of daily fresh and tasty meals to our clients."
              }
            />
            <WhatWeOfferProps
              icons={<MdOutlineIron />}
              first={"Ironing"}
              sec={
                "Use our ironing services to quickly made your clothes look splendid after laundry."
              }
            />
            <WhatWeOfferProps
              icons={<RiSafe3Line />}
              first={"Lockers"}
              sec={
                "If you carry any valuable items, feel free to store them in our hostel’s lockers."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
