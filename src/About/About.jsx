import SliderProps from "../SliderProps";
import CountedUp from "./CountedUp";
import ReviewTestimonial from "./ReviewTestimonial";
import Rooms from "./Rooms";
import WhyChoose from "./WhyChoose";

const About = () => {
  return (
    <>
      <SliderProps
        address={"assets/image/save-cash1.jpg"}
        first={"About Us"}
        li1={"Home"}
        li2={""}
        li3={"About us"}
        disno={"none"}
      />
      <WhyChoose />
      <Rooms />
      <ReviewTestimonial />
      <CountedUp />
    </>
  );
};
export default About;
