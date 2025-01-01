import CartCard from "./CartCard";
const Cart = ({ cartItems, setCartItems }) => {
    console.log(cartItems.title);

    if (cartItems.length === 0) {
        return <h3 className="empty-cart">Your cart is empty! <br /> Please add items to the cart.</h3>
    }

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
    return (
        cartItems.map((product) => {
            return (

                <CartCard
                    product={product}
                    key={product.id}
                    onRemove={onRemove}
                    onUpdateQty={onUpdateQty}
                />
            )

        })
    );
}
export default Cart;