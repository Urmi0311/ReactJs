import React from "react";

function Testimonial(props) {
    return (
        <div className="testimonial">
            <p>{props.text}</p>
            <img src={props.photoPath} alt="testimonial person" />
        </div>
    );
}

export default Testimonial;

