import SliderProps from "../SliderProps";
import ClassicB from "./ClassicB";

const Blog = () => {
    return (
        <>

            <SliderProps address={"assets/image/blog-slider1.jpg"} first={"Blog"} li1={"Home"} li2={""} li3={"Blog"} disno={"none"} pagename={"/rooms"} />
            <ClassicB />

        </>
    )
}

export default Blog