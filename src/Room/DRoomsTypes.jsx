import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DRoomsTypes = () => {
    return (
        <>

            <div className="d-rooms-t-outer">
                <div className="container">
                    <div className="d-rooms-t-inner">
                        <div className="d-rooms-t-arro-l"><Link to="/" className="d-rooms-t-icon"><IoMdArrowDropleft /><FaMinus className="minus-icon" /></Link></div>
                        <div className="d-rooms-t-arro-c">
                            <div className="d-rooms-t-arro-c-l">
                                <Link to="/" className="d-rooms-t-image"><img src="assets/image/d-rooms-t1.jpg" alt="one" /></Link>
                                <div className="d-rooms-t-c-info">
                                    <div className="d-rooms-t-c-first">Perfect for families</div>
                                    <Link to="/" className="d-rooms-t-c-sec">Triple Room</Link>
                                </div>
                            </div>
                            <div className="d-rooms-t-arro-c-r">
                                <div className="d-rooms-t-c-info">
                                    <div className="d-rooms-t-c-first">#1 choice for students</div>
                                    <Link to="/" className="d-rooms-t-c-sec">4-bed Mixed Dorm</Link>
                                </div>
                                <Link to="/" className="d-rooms-t-image"><img src="assets/image/d-rooms-t2.jpg" alt="two" /></Link>
                            </div>
                        </div>
                        <div className="d-rooms-t-arro-r"><Link to="/" className="d-rooms-t-icon"><FaMinus className="minus-icon" /><IoMdArrowDropright /></Link></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DRoomsTypes