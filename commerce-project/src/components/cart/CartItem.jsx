import defaultImg from "../../assets/default.png";
import "../../styles/cart.css";

const CartItem = ({ product, onRemove }) => {

  if (!product) {
    return null;
  }

  const { id, title, price, thumbnail, quantity } = product;

  return (
    <div className="cart-item">
      <img
        src={thumbnail || product.image || defaultImg}
        alt={title}
      />
      <p>{title}</p>
      <div className="item-actions">
        <p className="quantity">{quantity}</p>
      </div>
      <p className="price">{price.toFixed(2)} $</p>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
};

export default CartItem; 