import React, { useEffect, useState } from 'react';
import './Homepage.css';
import SimpleImageSlider from "react-simple-image-slider";
import axios from 'axios';
import Footer from "../components/Footer";

export default function App() {
  const sliderImages = [
    { url: "Images/image13.jpg" },
    { url: "Images/image14.jpg" },
    { url: "Images/image15.jpg" },
    { url: "Images/image16.jpg" },
  ];

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get('product.json')
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleAddToCart = (product) => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product already exists in cart
        const existingProduct = cartData.find((item) => item.id === product.id);

        if (existingProduct) {
            // Update quantity if product already in cart
            existingProduct.quantity += 1;
        } else {
            // Add new product to cart
            cartData.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cartData));
    } 
  return (
    <div className="home">
      <div className="banner">
        <SimpleImageSlider
          width={1270}
          height={500}
          images={sliderImages}
          showNavs={true}
          slideDuration={0.8}
          autoPlay={true}
        />
      </div>
        <div className="buy-products">BUY THE PRODUCTS</div>

<div className="product-list">
  {product.slice(0, 5).map((product) => (
    <div className="product-home-card" key={product.id}>
      <h3>{product.name}</h3>
      <img id="img" src={product.image} alt={product.name} />
      <p className="price">Rs {product.price} </p>
      <button onClick={() => {
        if (window.confirm("Are you sure to add product in cart ")) {
          handleAddToCart(product)
        }
      }}>Add to Cart</button>
    </div>
  ))}
</div>

<div>
      <img className="home" src="Images/lakme1.jpg" />
      <img className="home" src="Images/lakme2.jpg" />

</div>


        <Footer/>
    </div>


  );
    }
