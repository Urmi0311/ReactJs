import React from 'react';
import "./Footer.css";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <div>

            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>LAKME</h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">HELP</a>

                        <a href="#">FAQ</a>

                        <a href="#">CONTACT US</a>

                        <a href="#">Cancel Order</a>

                        <a href="#">Track Order</a>

                        <a href="#">Terms & Conditions</a>
                    </p>

                    <p className="footer-company-name">LAKME © 2023</p>
                </div>

                <div className="footer-center">

                    <div>
                        <MailIcon/>
                        <p>support@lakmeindia.com </p>
                    </div>

                    <div>
                       <PhoneIcon />
                        <p>1800-313-9293<span>Mon - Sat , 9 am to 7 pm</span></p>
                    </div>

                    <div>
                        <WhatsAppIcon />
                        <p>Chat with us on WhatsApp</p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        The contemporary Indian beauty expert - Lakmé continuously innovates to offer a wide range of
                        high performance and world class cosmetics and skincare products that have earned recognition
                        from the People for the Ethical Treatment of Animals (PETA).
                    </p>

                    <div className="footer-icons">

                        <a href="#"><FacebookIcon/></a>
                        <a href="#"><TwitterIcon/></a>
                        <a href="#"><LinkedInIcon /></a>


                    </div>

                </div>

            </footer>
        </div>
    );
}

export default Footer;