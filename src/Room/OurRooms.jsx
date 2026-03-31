import RoomsProps from "../Home/RoomsProps";

const OurRooms = () => {
  return (
    <>
      <div className="rooms-outer">
        <div className="container">
          <h2>Our Rooms</h2>
          <div className="rooms-inner">
            <RoomsProps
              address={"assets/image/rooms1.jpg"}
              alter={"one"}
              first={"double room (private)"}
              third={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              }
              price={"$30"}
            />
            <RoomsProps
              address={"assets/image/rooms2.jpg"}
              alter={"two"}
              first={"triple room"}
              third={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              }
              price={"$20"}
            />
            <RoomsProps
              address={"assets/image/rooms3.jpg"}
              alter={"three"}
              first={"4-bed mixed dorm"}
              third={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              }
              price={"$12"}
            />
            <RoomsProps
              address={"assets/image/rooms4.jpg"}
              alter={"four"}
              first={"6-bed mixed dorm"}
              third={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              }
              price={"$10"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OurRooms;
