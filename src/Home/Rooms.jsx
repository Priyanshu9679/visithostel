import RoomsProps from "./RoomsProps";

const Rooms = () => {
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
                "Double room is one of the most popular choices at Visit Hostel. It includes one double bed with comfortable mattresses and bed linen, WC, and a TV set."
              }
              price={"$30"}
            />
            <RoomsProps
              address={"assets/image/rooms2.jpg"}
              alter={"one"}
              first={"triple room"}
              third={
                "This room has three single beds, en-suite bathrooms, and card entry systems. It can be rented individually or for a company of three guests."
              }
              price={"$20"}
              mar={"mar-t"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Rooms;
