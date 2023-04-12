import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";
import ProductPage from "./pages/ProductPage";
import Payment from "./components/Payment";
import Billing from "./components/Billing";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Layout from "./pages/Layout";
import React from "react";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="AboutUs" element={<AboutUs />} />
                    <Route path="CartPage" element={< CartPage/>} />
                    <Route path="CheckoutPage" element={< CheckoutPage/>} />
                    <Route path="ContactUs" element={< ContactUs/>} />
                    <Route path="ProductPage" element={< ProductPage/>} />
                    <Route path="Payment" element={< Payment/>} />
                    <Route path="Billing" element={< Billing/>} />

                    <Route path="Testimonial" element={< Testimonial/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
