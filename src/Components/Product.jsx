import { useEffect } from "react";
import { useState } from "react";
import "./Pro.css"
import ProductCard from "./ProductCard";
import Header from "./Header";
import Router from "./Router";
import { RotatingLines } from 'react-loader-spinner'

function Product({ cartItems, setCartItems, notify, Toaster }) {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchApi = async () => {
        setLoading(true)
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setProduct(data)
        }
        catch (error) {
            console.error("Error: " + error);
        }
        finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        fetchApi();
    }, [])
    if (loading) {
        return (
            <div className="loading">
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        )
    }
    const addtoCart = (item) => {
        setCartItems([...cartItems, item]);
        console.log(item);
        notify("Added");

    }
    const renderProducts = () => {
        return (
            products.map((product) => {
                const isProductPresent = cartItems.find((cartItem) => cartItem.id == product.id)
                return (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addtoCart={addtoCart}
                        isProductPresent={isProductPresent}
                    />
                )
            })
        )
    }
  

    return (
        <>
            <div className="products">
                {renderProducts()}
                <Toaster />
            </div>
        </>
    )
}
export default Product;