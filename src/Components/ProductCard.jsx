function ProductCard({ product, addtoCart, isProductPresent}) {
    return (
        <div >
            <div className="Individual-Products">
                <p>Category: {product.category}</p>
                <img src={product.image} alt="Product Image"  />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="Price-Btn">
                    <span>Price:₹{product.price}</span>
                    <button onClick={addtoCart} disabled={isProductPresent}>Add to cart</button>

                </div>
            </div>
        </div>
    )
}
export default ProductCard;