import SliderProps from "../SliderProps"
import BlogPostBlogDetails from "./BlogPostBlogDetails"

const BlogPost = () => {
    return (
        <>

            <SliderProps 
                address={"assets/image/blogpost-slider1.jpg"} 
                
                first={"Blog Post"} 
                li1={"Home"} 
                li2={"Blog"} 
                li3={"Blog Post"} 
                disno={"block"} 
                pagename={"/blog"} 
            />
            <BlogPostBlogDetails />

        </>
    )
}

export default BlogPost