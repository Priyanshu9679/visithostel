import SliderProps from "../SliderProps";
import DRoomsDetails from "./DRoomsDetails";
import DRoomsTypes from "./DRoomsTypes";

const DoubleRooms = () => {
  return (
    <>
      <SliderProps
        address={"assets/image/double-rooms1.jpg"}
        first={"Double Room"}
        li1={"Home"}
        li2={"Rooms"}
        li3={"Double Room"}
        disno={"inline-block"}
        pagename={"/rooms"}
      />
      <DRoomsDetails />
      <DRoomsTypes />
    </>
  );
};

export default DoubleRooms;
