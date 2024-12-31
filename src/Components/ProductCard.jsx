function ProductCard({ product, addtoCart, isProductPresent}) {
    return (
        <div >
            <div className="Individual-Products">
                <p className="category">Category: {product.category}</p>
                <img src={product.image} alt="Product Image"  />
                <h3 className="Title">{product.title}</h3>
                <p>{product.description}</p>
                <div className="Price-Btn">
                    <span>Price: ${product.price}</span>
                    <button onClick={()=>addtoCart(product)} disabled={isProductPresent}>Add to cart</button>

                </div>
            </div>
        </div>
    )
}
export default ProductCard;