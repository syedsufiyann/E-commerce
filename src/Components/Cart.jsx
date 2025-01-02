import CartCard from "./CartCard";
import { Link } from "react-router-dom";
const Cart = ({ cartItems, setCartItems }) => {
    console.log(cartItems.title);

    const onUpdateQty = (productId, quantity) => {
        const updatedCartItems = cartItems.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity }
            }
            return product;
        })
        setCartItems(updatedCartItems);
    }

    const onRemove = (productId) => {
        const filterCartItems = cartItems.filter((product) => (product.id !== productId))
        setCartItems(filterCartItems)
    }

    const getTotoal = () => {
        return (
            cartItems.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
        )
    }

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h3 >Your cart is empty! <br />
                    Please add items to the cart.</h3>
                <Link to="/" className="link">
                    <button>Back to Shopping</button>
                </Link>
            </div>
        )
    }
    return (
        <div>
            <div className="total-backbtn">
                <Link to="/" className="link"><button><svg className="back-arrow" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="17px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>Back</button></Link>
                <p>Total <span className="t-price"> ${getTotoal().toFixed(2)}</span></p>
            </div>
            {cartItems.map((product) => {
                return (
                    <CartCard
                        product={product}
                        key={product.id}
                        onRemove={onRemove}
                        onUpdateQty={onUpdateQty}
                    />
                )
            })}
        </div>
    );
}
export default Cart;