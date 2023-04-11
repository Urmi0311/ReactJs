import React, {useEffect, useState} from 'react';
import './Homepage.css';
import SimpleImageSlider from "react-simple-image-slider";
import Footer from '../components/Footer';
export default function App() {
    const sliderImages = [
        {
            url:"Images/image13.jpg",
        },
        {
            url:"Images/image14.jpg",
        },
        {
            url:"Images/image15.jpg",
        },
        {
            url:"Images/image16.jpg",
        },
    ];

    return (
        <div className="home">
            <div className="banner">
                <SimpleImageSlider
                    width={1408}
                    height={500}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={0.8}
                    autoPlay={true}

                />

            </div>
            <Footer />
        </div>
    );
}
