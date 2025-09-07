import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./Header";
import toast, { Toaster } from 'react-hot-toast';

const Router = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItemsStringified = localStorage.getItem("cartItems");
        if (cartItemsStringified) {
            const cartItems = JSON.parse(cartItemsStringified)
            setCartItems(cartItems);
        }
    }, [])
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
        }
    }, [cartItems])
    const notify = (text) => toast(text);

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
                            notify={notify}
                            Toaster={Toaster}

                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            notify={notify}
                            Toaster={Toaster}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;