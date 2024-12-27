import { useEffect } from "react";
import { useState } from "react";
import "./Pro.css"

function Product() {
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
                <h2>Products are loading...</h2>
            </div>
        )
    }
    const renderProducts = () => {
        return (
            products.map((product) => {
                return (<div key={product.id}>
                    <p>{product.id}</p>
                    <p>Product Title: {product.title}</p>
                    <p>Product Description: {product.description}</p>
                </div>)
            })
        )
    }
    return (
        <>
            <h2>Below are Prods:</h2>
            {renderProducts()}
        </>
    )
}
export default Product;