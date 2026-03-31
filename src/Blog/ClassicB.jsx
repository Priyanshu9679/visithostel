import ClassicItemProps from "./ClassicItemProps"
import Sidebar from "./Sidebar"

import { Pagination } from 'antd';

const ClassicB = () => {
    return (
        <>
        
            <div className="post-classic-outer">
                <div className="container">
                    <div className="post-classic-inner">
                        <div className="post-classic-left">
                            <ClassicItemProps 
                                title={"How to Save a Lot When Traveling Worldwide"} 
                                category={"News"} 
                                comment={"14"} 
                                date={"Now 30, 2023"} 
                                author={"Gavin Bell"} 
                                address={"assets/image/post-classic1.jpg"} 
                                alter={"one"} 
                                threednone={"none"} 
                            />
                            <ClassicItemProps 
                                title={"Best Days to Stay in Los Angeles"} 
                                category={"Articles"} 
                                comment={"14"} 
                                date={"Now 30, 2023"} 
                                author={"Gavin Bell"} 
                                address={"assets/image/post-classic2.jpg"} 
                                alter={"two"} 
                                threednone={"none"} 
                            />
                            <ClassicItemProps 
                                title={"Top 3 Hostels for Families with Kids"} 
                                category={"News"} 
                                comment={"14"} 
                                date={"Now 30, 2023"} 
                                author={"Gavin Bell"} 
                                address={"assets/image/post-classic3.jpg"} 
                                alter={"three"} 
                                threednone={"none"} 
                            />
                            <ClassicItemProps 
                                title={"Top 8 Minimalistic Hostels in the USA"} 
                                category={"News"} 
                                comment={"14"} 
                                date={"Now 30, 2023"} 
                                author={"Gavin Bell"} 
                                alter={"four"} 
                                dnone={"none"} 
                                image1={"assets/image/post-classic4.jpg"} 
                                image2={"assets/image/post-classic5.jpg"} 
                                image3={"assets/image/post-classic6.jpg"} 
                            />
                            <Pagination align="center" defaultCurrent={1} total={40} className="post-classic-pagination" />
                        </div>
                        <div className="post-classic-right">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClassicB