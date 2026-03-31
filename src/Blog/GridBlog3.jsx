import SliderProps from "../SliderProps";
import GridB3 from "./GridB3";

const GridBlog3 = () => {
    return (
        <>

            <SliderProps 
                address={"assets/image/blog-slider1.jpg"} 
                first={"Grid Blog 3"} 
                li1={"Home"} 
                li2={"Blog"} 
                li3={"Grid Blog 3"} 
                disno={"block"} 
                pagename={"/blog"} 
            />
            <GridB3 />

        </>
    )
}

export default GridBlog3