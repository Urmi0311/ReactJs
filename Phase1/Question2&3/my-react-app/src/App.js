import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
    return (
        <div>

            <nav>
                <div className="menu">
                    <div className="logo">
                        <a href="#">CodingLab</a>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </div>
            </nav>
            <div className="img"></div>
            <div className="center">
                <div className="title">Create Amazing Website</div>
                <div className="sub_title">Pure HTML & CSS Only</div>
                <div className="btns">
                    <button>Learn More</button>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

    );

}

export default App;
