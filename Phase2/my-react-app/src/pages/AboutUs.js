import React from 'react';
import './AboutUs.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



const AboutUs = () => {
    return (
        <div>
            <div className="about-us">
                <div className="about-us-header">
                    <h1>About Lakme</h1>
                </div>
                <div className="about-us-content">
                    <p className="about-us-intro">Lakme is an Indian cosmetics brand that was founded in 1952. The brand is named after the French opera Lakmé, which was famous for its beautiful portrayal of women.</p>
                    <p>Since its inception, Lakme has been committed to providing high-quality beauty products to women of all ages and skin types. The brand's products are inspired by the latest beauty trends and are formulated with the best ingredients to deliver the desired results.</p>
                    <p>Today, Lakme is one of the leading beauty brands in India and is known for its wide range of products, including makeup, skincare, haircare, and more. The brand has a strong presence in the Indian market and is loved by millions of women across the country.</p>
                </div>
                <div className="about-us-section">
                    <h2>Our Mission</h2>
                    <p>At Lakme, our mission is to empower women by helping them look and feel their best. We believe that every woman deserves to feel confident and beautiful, and our products are designed to make that happen.</p>
                </div>
                <div className="about-us-section">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Quality:</strong> We are committed to using the best ingredients and the latest technology to create products that are safe, effective, and of the highest quality.</li>
                        <li><strong>Innovation:</strong> We are always looking for new and innovative ways to improve our products and services, so we can better serve our customers.</li>
                        <li><strong>Accessibility:</strong> We believe that everyone should have access to high-quality beauty products, regardless of their skin type, age, or budget.</li>
                    </ul>
                </div>
                <div className="about-us-footer">
                    <p>Follow us on social media:</p>
                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/LakmeIndia" target="_blank"><FacebookIcon />
                        </a>
                        <a href="https://www.instagram.com/lakmeindia/" target="_blank"><YouTubeIcon /></a>
                        <a href="https://twitter.com/lakme" target="_blank"><TwitterIcon /></a>
                        <a href="https://www.youtube.com/user/ILoveLakme" target="_blank"><YouTubeIcon /></a>
                    </div>
                </div>

            </div>


            <div className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Cancel Order</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">

                        <ul>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Privacy Notice</a></li>
                            <li><a href="#">Cookie Notice</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Order History</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li><a href="#">Inspire Me</a></li>
                            <li><a href="#">Beauty Book</a></li>
                            <li><a href="#">Lakme TV</a></li>
                            <li><a href="#">Lake Network</a></li>
                            <li><a href="#">Buying Guides</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <ul>
                        <li><a href="#">Quick Links</a></li>
                        <li><a href="#">Offer Zone</a></li>
                        <li><a href="#">New Launches</a></li>
                        <li><a href="#">Lakme Man</a></li>
                        <li><a href="#">Lakme Fashion</a></li>
                        <li><a href="#">Lakme Pro</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
}


export default AboutUs;
