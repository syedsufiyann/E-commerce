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
            <div className="heading"><h2 style={{ textAlign: "center" }}>E-commerce App</h2>
                <div className="cart-container"><a href=""><h2 style={{ textAlign: "right", verticalAlign: "middle" }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>{cartItems.length}</h2></a></div>
            </div>
            <div className="products">
                {renderProducts()}
            </div>
        </>
    )
}
export default Product;