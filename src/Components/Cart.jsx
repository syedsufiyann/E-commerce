import CartCard from "./CartCard";
const Cart = ({ cartItems }) => {
    console.log(cartItems.title);
    
    return (
        cartItems.map((product) => {
            return (
                
                <CartCard
                    product={product}
                />
            )

        })
    );
}
export default Cart;