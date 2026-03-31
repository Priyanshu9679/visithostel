import SliderProps from "../SliderProps";
import GridB2 from "./GridB2";

const GridBlog2 = () => {
    return (
        <>

            <SliderProps 
                address={"assets/image/blog-slider1.jpg"} 
                first={"Grid Blog 2"} 
                li1={"Home"} 
                li2={"Blog"} 
                li3={"Grid Blog 2"} 
                disno={"block"} 
                pagename={"/blog"} 
            />
            <GridB2 /> 

        </>
    )
}

export default GridBlog2