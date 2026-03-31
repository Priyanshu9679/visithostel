import SliderProps from "../SliderProps";
import ClassicB from "./ClassicB";

const ClassicBlog = () => {
    return (
        <>

            <SliderProps 
                address={"assets/image/blog-slider1.jpg"} 
                first={"Classic Blog"} 
                li1={"Home"} 
                li2={"Blog"} 
                li3={"Classic Blog"} 
                disno={"block"} 
                pagename={"/blog"} 
            />
            <ClassicB />

        </>
    )
}

export default ClassicBlog