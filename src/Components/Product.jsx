import { useEffect } from "react";
import { useState } from "react";
import "./Pro.css"
import ProductCard from "./ProductCard";
import Header from "./Header";

function Product() {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
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
                <h2>Products are loading...</h2>
            </div>
        )
    }
    const addtoCart = (item) => {
        setCartItems([...cartItems, item]);
        console.log(item);

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
            <Header cartItems={cartItems}
            />
            <div className="products">
                {renderProducts()}
            </div>
        </>
    )
}
export default Product;