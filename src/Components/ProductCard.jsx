function ProductCard({ product }) {
    return (
        <div >
            <div className="Individual-Products">
                <p>Category: {product.category}</p>
                <img src={product.image} alt="Product Image"  />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
export default ProductCard;