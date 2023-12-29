import React from "react";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

const Cart = React.memo(() => {
  const { cartState, removeFromCart } = useCart();
  const { items: products } = cartState;

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  ).toFixed(2);

  return (
    <div className="cart">
      {products.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cartProduct">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onRemove={() => handleRemove(product.id)}
              />
            ))}
          </div>
          <div className="cart-summary">
            <p>Cart Summary</p>
            <p className="total-price">{isNaN(totalPrice) ? 0 : totalPrice} $</p>
            <button className="buy-now">Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
});

Cart.displayName = "Cart";

export default Cart;
