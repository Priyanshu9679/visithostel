import RoomsProps from "./RoomsProps";

const Rooms = () => {
  return (
    <>
      <div className="rooms-a-outer">
        <h2>Our Rooms</h2>
        <div className="rooms-a-inner">
          <RoomsProps
            address={"assets/image/rooms-a1.jpg"}
            alter={"one"}
            first={"double room (private)"}
            price={"$30.00"}
          />
          <RoomsProps
            address={"assets/image/rooms-a2.jpg"}
            alter={"two"}
            first={"twin room"}
            price={"$18.00"}
          />
          <RoomsProps
            address={"assets/image/rooms-a3.jpg"}
            alter={"three"}
            first={"triple room"}
            price={"$15.00"}
          />
          <RoomsProps
            address={"assets/image/rooms-a4.jpg"}
            alter={"four"}
            first={"4-bed mixed dorm"}
            price={"$10.00"}
          />
        </div>
      </div>
    </>
  );
};

export default Rooms;
