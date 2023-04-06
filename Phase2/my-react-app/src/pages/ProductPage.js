import React from 'react';
import {  useState , useEffect} from "react";
import axios from "axios";
import './ProductPage.css';
function ProductPage() {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        axios
            .get("product.json")
            .then((res) => setproduct(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="product-container">
            <ul className="product-card">
                {product.map((product, index) => (
                    <li className="product" key={index}>
                        <div className="product-img">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default ProductPage;
