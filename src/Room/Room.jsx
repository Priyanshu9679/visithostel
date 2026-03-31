import SliderProps from "../SliderProps";
import OurRooms from "./OurRooms";

const Room = () => {
  return (
    <>
      <SliderProps
        address={"assets/image/room-hero1.jpg"}
        first={"Rooms"}
        li1={"Home"}
        li2={""}
        li3={"Rooms"}
        disno={"none"}
      />
      <OurRooms />
    </>
  );
};
export default Room;
