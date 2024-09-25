import React from "react";

const ContactUs = () => {
    return (
        <footer className="Mainbox">
            <div className="contact-container">
                {/* Reach Us Section */}
                <div className="reach-us">
                    <h2 id="ReachUsHead">Reach Us At</h2>
                    <ul id="ReachUsSub">
                        <li>
                            <img src="phone-call.png" alt="Phone Icon" />
                            <span>9761756097</span>
                        </li>
                        <li>
                            <img src="facebook.png" alt="Facebook Icon" />
                            <span>FoodHub</span>
                        </li>
                        <li>
                            <img src="email.png" alt="Email Icon" />
                            <span>FoodHub69@gmail.com</span>
                        </li>
                        <li>
                            <img src="placeholder.png" alt="Location Icon" />
                            <span>Banasthali, KTM</span>
                        </li>
                    </ul>
                </div>

                {/* Google Map Embed Section */}
                <div className="map-container">
                    <h2>Our Location</h2>
                    <div className="map-embed">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.041329415292!2d85.30683967519755!3d27.7052355827867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191376c1bbf5%3A0x4100cf3b1521acbd!2sBanasthali%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1630420729283!5m2!1sen!2snp"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>

                {/* Social Media Links Section */}
                <div className="social-media">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="instagram.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactUs;
