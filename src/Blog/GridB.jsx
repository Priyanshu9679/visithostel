import { Pagination } from "antd"
import GridItemProps from "./GridItemProps"

const GridB = () => {
    return (
        <>
            <div className="post-grid-outer">
                <div className="container">
                    <div className="post-grid-inner">
                        <GridItemProps 
                            address="assets/image/post-grid1.jpg" 
                            alter="one" 
                            date="04" 
                            month="july" 
                            first="How to Save a Lot When Traveling" 
                            sec="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
                        />
                        <GridItemProps 
                            address="assets/image/post-grid2.jpg" 
                            alter="two" 
                            date="17" 
                            month="july" 
                            first="Best Days to Stay in LA" 
                            sec="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
                        />
                        <GridItemProps 
                            address="assets/image/post-grid3.jpg" 
                            alter="three" 
                            date="22" 
                            month="july" 
                            first="Top 8 Minimalistic Hostels" 
                            sec="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
                        />
                        <GridItemProps 
                            address="assets/image/post-grid4.jpg" 
                            alter="four" 
                            date="04" 
                            month="july" 
                            first="Top 3 Hostels for Families" 
                            sec="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
                        />
                        <GridItemProps 
                            address="assets/image/post-grid5.jpg" 
                            alter="five" 
                            date="17" 
                            month="july" 
                            first="5 Obligatory Hostel Amenities" 
                            sec="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
                        />
                        <GridItemProps 
                            address="assets/image/post-grid6.jpg" 
                            alter="six" 
                            date="22" 
                            month="july" 
                            first="A Perfect Hostel: Does it Exist?" 
                            sec="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
                        />
                        <div className="post-grid-pagination-section">
                            <Pagination align="center" defaultCurrent={1} total={40} className="post-grid-pagination" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GridB