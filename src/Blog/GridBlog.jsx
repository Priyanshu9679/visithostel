import SliderProps from "../SliderProps";
import GridB from "./GridB";

const GridBlog = () => {
    return (
        <>

            <SliderProps 
                address={"assets/image/blog-slider1.jpg"} 
                first={"Grid Blog"} 
                li1={"Home"} 
                li2={"Blog"} 
                li3={"Grid Blog"} 
                disno={"block"} 
                pagename={"/blog"} 
            />
            <GridB />

        </>
    )
}

export default GridBlog