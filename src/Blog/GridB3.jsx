import { Pagination } from "antd"
import BlogPoastsProps from "../Home/BlogPoastsProps"

const GridB3 = () => {
    return (
        <>

            <div className="post-grid3-outer blog-outer">
                <div className="container">
                    <div className="post-grid3-inner blog-inner">
                        <BlogPoastsProps
                            address={"assets/image/blog-posts1.jpg"}
                            alter={"one"}
                            first={"How to save a lot when traveling worldwide"}
                            sec={"May 17, 2023"}
                        />
                        <BlogPoastsProps
                            address={"assets/image/blog-posts2.jpg"}
                            alter={"two"}
                            first={"Best Days to Stay in Los Angeles"}
                            firsts={"throughout the year"}
                            sec={"May 12, 2023"}
                        />
                        <BlogPoastsProps
                            address={"assets/image/blog-posts3.jpg"}
                            alter={"three"}
                            first={"Top 8 Minimalistic Hostels in the "}
                            firsts={"USA That You Will Like"}
                            sec={"May 17, 2023"}
                        />
                        <BlogPoastsProps
                            address={"assets/image/blog-posts4.jpg"}
                            alter={"two"}
                            first={"Top 3 Hostels for Families with"}
                            firsts={"Kids in europe"}
                            sec={"May 12, 2023"}
                        />
                        <div className="post-pagination-section">
                            <Pagination align="center" defaultCurrent={1} total={40} className="post-pagination" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GridB3