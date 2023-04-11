import React, { useState, useEffect } from "react";
import './CartPage.css';

function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartItems);
    }, []);

    const handleRemoveItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleIncrement = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleDecrement = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            setCart(newCart);

            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    };

    const subTotal = (item) => {
        return item.price * item.quantity;
    };

    const total = cart.reduce((acc, item) => {
        return acc + subTotal(item);
    }, 0);

    const handleBuyNow = () => {
        window.location.href = "/Billing";
    };

    return (
        <div className="cart">
            <h2>CART</h2>
            {cart.length > 0 ? (
                <>
                    <div className="cartItems">
                        {cart.map((item, index) => (
                            <div className="cartItem" key={index}>
                                <img src={item.image} alt={item.name} />
                                <div className="description">
                                    <h3>{item.name}</h3>
                                    <p>Rs {item.price}</p>
                                    <div className="countHandler">
                                        <button onClick={() => handleDecrement(index)}>-</button>
                                        <input type="text" value={item.quantity} readOnly />
                                        <button onClick={() => handleIncrement(index)}>+</button>
                                    </div>
                                    <p>Subtotal: Rs {subTotal(item)}</p>
                                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout">
                        <p className="total">Total: Rs {total}</p>
                        <button onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </>
            ) : (
                <p>No items in cart.</p>
            )}

        </div>
    );
}

export default CartPage;
