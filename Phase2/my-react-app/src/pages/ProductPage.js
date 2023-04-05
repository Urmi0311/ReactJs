import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const { productId } = useParams();

    const addToCart = () => {
        setCart((prevCart) => [...prevCart, productId]);
    };

    // Replace this with your own product data
    const product = {
        id: productId,
        name: 'Example Product',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
