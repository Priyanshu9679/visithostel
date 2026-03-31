import { Pagination } from "antd"
import GridItemProps2 from "./GridItemProps2"

const GridB2 = () => {
    return(
        <>
        
            <div className="post-grid2-outer">
                <div className="container">
                    <div className="post-grid2-inner">
                        <GridItemProps2 addressp="assets/image/gridblog2-profile1.jpg" alterp="one Profile" name="Mary Lee" date="May 17, 2023" address="assets/image/post-grid2-1.jpg" alter="one" details="How to Save a Lot When Traveling Worldwide" />
                        <GridItemProps2 addressp="assets/image/gridblog2-profile2.jpg" alterp="two Profile" name="Samuel Miller" date="May 04, 2023" address="assets/image/post-grid2-2.jpg" alter="two" details="Best Days to Stay in Los Angeles throughout the year" />
                        <GridItemProps2 addressp="assets/image/gridblog2-profile3.jpg" alterp="three Profile" name="Ann Anderson" date="May 17, 2023" address="assets/image/post-grid2-3.jpg" alter="three" details="Top 8 Minimalistic Hostels in the USA that you will like" />
                        <GridItemProps2 addressp="assets/image/gridblog2-profile3.jpg" alterp="four Profile" name="Ann Anderson" date="May 17, 2023" address="assets/image/post-grid2-4.jpg" alter="four" details="Top 3 Hostels for Families with Kids in Europe" />
                        <GridItemProps2 addressp="assets/image/gridblog2-profile1.jpg" alterp="five Profile" name="Mary Lee" date="May 17, 2023" address="assets/image/post-grid2-5.jpg" alter="five" details="5 Amenities That Every Hostel Should Have Nowadays" />
                        <GridItemProps2 addressp="assets/image/gridblog2-profile2.jpg" alterp="six Profile" name="Samuel Miller" date="May 04, 2023" address="assets/image/post-grid2-6.jpg" alter="six" details="A Perfect Hostel: Does it Exist and how much does its room cost?" />
                        <div className="post-pagination-section">
                            <Pagination align="center" defaultCurrent={1} total={40} className="post-pagination" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GridB2