const CartCard = ({product}) => {
    // if(CartCard===[]){
    //     return(
    //         <p>cart is empty</p>
    //     )
    // }
    return (
        <>
             <div className="Cart-Products">
                    <div>
                        <img src={product.image} alt="Product Image" />
                    </div>
                    <div className="Cart-Price">
                        <h3 className="Cart-Title">{product.title}</h3>
                        <span>Price: ${product.price}</span>
                    </div>
                </div>
        </>
    )
}
export default CartCard;