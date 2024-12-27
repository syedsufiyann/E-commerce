function ProductCard({thisproduct}) {
    return (
        <div>
            <p>{thisproduct.id} - {thisproduct.title}</p>
            <img src={thisproduct.image} alt="" width={100}/>
            
        </div>
    )
}
export default ProductCard;