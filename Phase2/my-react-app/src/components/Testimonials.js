import React, { useState } from "react";
import Testimonial from "./Testimonial";
import "./Testimonials.css";

const testimonialsData = [
    {
        text:
            "I absolutely loved my experience with this company. The customer service was excellent and the products were high-quality.",
        photoPath: "/Images/person1.jpeg",
    },
    {
        text:
            "I've been a customer for years and I always recommend this company to my friends and family. The products are top-notch and the staff is friendly and knowledgeable.",
        photoPath: "/Images/person2.jpeg",
    },
    {
        text:
            "I was hesitant to try this company at first, but I'm so glad I did. The products exceeded my expectations and the customer service was fantastic.",
        photoPath: "/Images/person3.jpeg",
    },
    {
        text:
            "I have been using Lakme products for over a year now and they have completely transformed my skin. My complexion is clearer and brighter than ever before!",
        photoPath: "/Images/person4.jpeg",
    },
    {
        text:
            "I always get compliments on my makeup when I use Lakme products. The colors are vibrant and the formulas are long-lasting.",
        photoPath: "/Images/person5.jpg",
    },
    {
        text:
            "I recently tried Lakme's new moisturizer and it has become a staple in my skincare routine. It keeps my skin hydrated all day long!",
        photoPath: "/Images/person6.jpg",
    },
];


function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleNextClick = () => {
        setIndex((index + 1) % testimonialsData.length);
    };

    const handlePrevClick = () => {
        setIndex((index - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const testimonialsToShow = testimonialsData.slice(index, index + 3);

    return (
        <div className="testimonials-container">
            <button className="prev-button" onClick={handlePrevClick}>
                &#60;
            </button>
            <div className="testimonials">
                {testimonialsToShow.map((testimonial, index) => (
                    <Testimonial
                        key={index}
                        text={testimonial.text}
                        photoPath={testimonial.photoPath}
                    />
                ))}
            </div>
            <button className="next-button" onClick={handleNextClick}>
                &#62;
            </button>
        </div>
    );
}

export default Testimonials;
