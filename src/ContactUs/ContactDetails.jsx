import { BiMessageRounded } from "react-icons/bi"
import { HiOutlineHome } from "react-icons/hi"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { Link } from "react-router-dom"

const ContactDetails = () => {
    return (
        <>

            <div className="contact-detail-outer">
                <div className="container">
                    <div className="contact-detail-inner">
                        <div className="contact-detail-item">
                            <div className="contact-detail-item-inner">
                                <div className="contact-detail-icon"><HiOutlineDevicePhoneMobile /></div>
                                <div className="contact-detail-decor"></div>
                                <div className="contact-detail-info">
                                    <Link to="/" >+1 323-913-4688<br />+1 323-888-4554</Link>
                                </div>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-item-inner">
                                <div className="contact-detail-icon"><HiOutlineHome /></div>
                                <div className="contact-detail-decor"></div>
                                <div className="contact-detail-info">
                                    <Link to="/">4730 Crystal Springs Dr, <br />Los Angeles, CA 90027</Link>
                                </div>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <div className="contact-detail-item-inner">
                                <div className="contact-detail-icon"><BiMessageRounded /></div>
                                <div className="contact-detail-decor"></div>
                                <div className="contact-detail-info">
                                    <Link to="/">mail@demolink.org<br />info@demolink.org</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactDetails