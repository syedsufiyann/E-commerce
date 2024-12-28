import { useEffect } from "react";
import { useState } from "react";
import "./Pro.css"
import ProductCard from "./ProductCard";

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
            <h2 style={{ textAlign: "center" }}>E-commerce App</h2>
            <h2 style={{ textAlign: "center" }}>Cart-Item Count:{cartItems.length}</h2>
            <div className="products">
                {renderProducts()}
            </div>
        </>
    )
}
export default Product;