import {Outlet, Link} from "react-router-dom";
import './Layout.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from "../components/Footer";
import React from "react";


const Layout = () => {
    return (
        <>
            <nav>
                <div className="a1">
                    <p>LAKME</p>
                </div>
                <ul >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">AboutUs</Link></li>

                    <li><Link to="/ContactUs">ContactUS</Link></li>
                    <li><Link to="/ProductPage">Product</Link></li>
                    <li><Link to="/CartPage"><ShoppingCartIcon /></Link></li>

                </ul>
            </nav>

            <Outlet/>

        </>
    )
};
export default Layout;