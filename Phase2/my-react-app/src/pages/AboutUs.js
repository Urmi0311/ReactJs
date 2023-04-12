import React from 'react';
import './AboutUs.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Testimonials from '../components/Testimonials';


const AboutUs = () => {
    return (
        <div>
            <div className="about-us">
                <div className="about-us-header">
                    <h1>About Lakme</h1>
                </div>
                <div className="about-us-content">
                    <p className="about-us-intro">Lakme is an Indian cosmetics brand that was founded in 1952. The brand
                        is named after the French opera Lakmé, which was famous for its beautiful portrayal of
                        women.</p>
                    <p className="about-p">Since its inception, Lakme has been committed to providing high-quality
                        beauty products to women of all ages and skin types. The brand's products are inspired by the
                        latest beauty trends and are formulated with the best ingredients to deliver the desired
                        results.</p>
                    <p>Today, Lakme is one of the leading beauty brands in India and is known for its wide range of
                        products, including makeup, skincare, haircare, and more. The brand has a strong presence in the
                        Indian market and is loved by millions of women across the country.</p>
                </div>
                <div className="about-us-section">
                    <h2>Our Mission</h2>
                    <p className="about-p">At Lakme, our mission is to empower women by helping them look and feel their
                        best. We believe that every woman deserves to feel confident and beautiful, and our products are
                        designed to make that happen.</p>
                </div>
                <div className="about-us-section">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Quality:</strong> We are committed to using the best ingredients and the latest
                            technology to create products that are safe, effective, and of the highest quality.
                        </li>
                        <li><strong>Innovation:</strong> We are always looking for new and innovative ways to improve
                            our products and services, so we can better serve our customers.
                        </li>
                        <li><strong>Accessibility:</strong> We believe that everyone should have access to high-quality
                            beauty products, regardless of their skin type, age, or budget.
                        </li>
                    </ul>
                </div>
                <div className="about-us-footer">
                    <p className="about-p">Follow us on social media:</p>
                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/LakmeIndia" target="_blank"><FacebookIcon/>
                        </a>
                        <a href="https://www.instagram.com/lakmeindia/" target="_blank"><YouTubeIcon/></a>
                        <a href="https://twitter.com/lakme" target="_blank"><TwitterIcon/></a>
                        <a href="https://www.youtube.com/user/ILoveLakme" target="_blank"><YouTubeIcon/></a>
                    </div>
                </div>

            </div>
            <div className="c1">
                <div className="image1">
                    <img src="Images/lakme1.jpg" alt="Lakme"/>
                </div>
                <div className="c2">
                    <div className="column">

                        <p className="about-p">Lakme is an Indian cosmetics brand owned by Hindustan Unilever. It was
                            started in 1952 as a
                            100% subsidiary of Tata Oil Mills (Tomco). Lakme is named after the French opera Lakmé,
                            which itself is the French form of Lakshmi (the goddess of wealth) who is renowned for her
                            beauty.</p>
                        <div className="button-container">
                            <button className="read-more-button"><a href="https://www.lakmeindia.com/pages/about-us">Read More</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c1">
                <div className="c2">
                    <div className="column">

                        <p className="about-p">Lakme is a well-known Indian cosmetics brand that was started in 1952 as
                            a 100% subsidiary of Tata Oil Mills. The brand is currently owned by Hindustan Unilever, and
                            is named after the French opera Lakmé, which itself is the French form of Lakshmi, the Hindu
                            goddess of wealth, who is renowned for her beauty.
                            Lakme offers a wide range of beauty products, including skincare, makeup, and hair care
                            products. The brand is known for its high-quality products that are designed to suit the
                            Indian skin tone and climate.</p>
                        <div className="button-container">
                            <button className="read-more-button"><a href="https://en.wikipedia.org/wiki/Lakm%C3%A9_Cosmetics">Read More</a></button>
                        </div>
                    </div>
                </div>
                <div className="image1">
                    <img src="Images/lakme3.jpg" alt="Lakme"/>
                </div>
            </div>


            <div className="cont">
                <div className="row1">
                    <div className="column1">
                        <div className="round-image1">
                            <img src="Images/ab1.jpg" alt="Lakme"/>
                        </div>
                        <p className="column-content1">
                            Lakmé was the country's FIRST COSMETIC BRAND to introduce make up to Indian women and takes pride in being the expert on Indian Beauty for over 50 YEARS.
                        </p>
                    </div>
                    <div className="column1">
                        <div className="image-container1">
                            <img src="Images/ab2.jpg" alt="Lakme"/>
                        </div>
                        <p className="column-content1">
                            It is a COMPLETE BEAUTY BRAND spanning colour cosmetics &amp; skin care and extending to beauty services through the network of LAKMÉ SALONS.
                        </p>
                    </div>
                    <div className="column1">
                        <div className="image-container1">
                            <img src="Images/ab3.jpg" alt="Lakme"/>
                        </div>
                        <p className="column-content1">
                            Its bond with beauty and fashion is manifested through the LAKMÉ FASHION WEEK, which is now the largest fashion event of its kind in the country.
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <Testimonials/>
            </div>
        </div>
    );
}


export default AboutUs;
