import { useEffect } from "react";
import { useState } from "react";
import "./Pro.css"

function Product() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchApi = async ()=>{
        setLoading(true)
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setProduct(data)
            
            
        }
        catch(error){
            console.error("Error: "+error);
        }
        finally{
            setLoading(false)
        }
    };
    useEffect(()=>{
        fetchApi();
    },[])
    if(loading){
        return (
            <div className="loading">
                <h2>Products are loading...</h2>

            </div>

        )
    }

    return (
        <>
            <h2>I am Product...</h2>
            {product[2].title}
        </>
    )
}
export default Product;