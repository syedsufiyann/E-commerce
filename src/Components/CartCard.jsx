import { useEffect } from "react";

const CartCard = ({ product, onRemove, onUpdateQty }) => {
    const onhandleIncrement = () => {
        const currentQuantity = Number(product.quantity)||1;
        onUpdateQty(product.id, currentQuantity + 1);
    }
    const onhandleDecrement = () => {
        if(product.quantity>1){
            onUpdateQty(product.id,product.quantity-1)
        }
    }
    useEffect(() => {
        if (isNaN(product.quantity)) {
            onUpdateQty(product.id, 1); 
        }
    }, [product.id, product.quantity, onUpdateQty]);
    return (
        <>
            <div className="Cart-Products">
                <div className="Cart-img-text">
                    <div>
                        <img src={product.image} alt="Product Image" />
                    </div>
                    <div className="Cart-Price">
                        <h3 className="Cart-Title">{product.title}</h3>
                        <p>Price: ${(product.price*product.quantity).toFixed(2)}</p>
                        <div className="qty-btns">
                            <button onClick={onhandleDecrement} disabled={product.quantity <= 1}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={onhandleIncrement}>+</button>
                        </div>

                    </div>
                </div>
                <div className="remove-btn">
                    <button onClick={() => onRemove(product.id)} >Remove</button>
                </div>
            </div>
        </>
    )
}
export default CartCard;