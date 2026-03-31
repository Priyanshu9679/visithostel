import React from "react";
import { RiHexagonFill } from "react-icons/ri";
import { FaRegMap } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoIosStarOutline } from "react-icons/io";

const Sservices = () => {
    return(
        <>
        
        <div className="sservices-outer">
            <div className="container">
                <div className="sservices-inner">
                    <div className="sservices-item">
                        <div className="sservices-info-outer">
                            <div className="sservices-image ">
                                <FaRegMap className="map" />
                                <RiHexagonFill fill="#ffdb73" className="sservices-hexa" />
                            </div>
                            <h2 className="sservices-title">Map & Directions</h2>
                            <div className="sservices-decor"></div>
                            <p className="sservices-info">Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</p>
                        </div>
                    </div>
                    
                    <div className="sservices-item">
                        <div className="sservices-info-outer">
                            <div className="sservices-image ">
                                <BiHomeAlt2 className="home" />
                                <RiHexagonFill fill="#ffdb73" className="sservices-hexa" />
                            </div>
                            <h2 className="sservices-title">accommodation services</h2>
                            <div className="sservices-decor"></div>
                            <p className="sservices-info">Visit Hostel provides high-quality accommodation services to clients that come to our city from all over the world throughout the year.</p>
                        </div>
                    </div>

                    <div className="sservices-item">
                        <div className="sservices-info-outer">
                            <div className="sservices-image ">
                                <IoIosStarOutline className="star" />
                                <RiHexagonFill fill="#ffdb73" className="sservices-hexa" />
                            </div>
                            <h2 className="sservices-title">great experience</h2>
                            <div className="sservices-decor"></div>
                            <p className="sservices-info">With qualified and friendly staff and high level of comfort, we are sure you will have a great experience of staying at the Visit Hostel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sservices