import React from 'react';
import bannerImage from './lakme.jpg';
import './Homepage.css';

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img className="banner1" src={bannerImage} alt="Banner" />
            </div>
            <h1>Welcome to my website!</h1>
            <p>This is my home page.</p>
        </div>
    );
};

export default Home;


