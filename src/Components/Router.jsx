import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./Header";

const Router = () => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <BrowserRouter>
            <Header cartItems={cartItems} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Product
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    }
                />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;