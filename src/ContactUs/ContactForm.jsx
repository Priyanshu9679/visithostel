const ContactForm = () => {
    return(
        <>

            <div className="contact-form-outer">
                <div className="container">
                    <div className="contact-form-inner">
                        <h2><span className="contact-form-title">Get in touch</span><span className="contact-form-disc">If you have any questions, just fill in the contact form, and we will answer you shortly.</span></h2>
                        <div className="contact-form-item">
                            <input type="text" className="contact-form-name" placeholder="Your Name" />
                            <input type="email" className="contact-form-email" placeholder="Your E-mail" />
                            <input type="text" className="contact-form-num" placeholder="Your Phone" />
                            <textarea className="contact-form-message" placeholder="Message"></textarea>
                            <div className="contact-form-btn">
                                <input type="button" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ContactForm