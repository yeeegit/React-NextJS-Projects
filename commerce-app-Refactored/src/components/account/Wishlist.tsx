import { useState, useEffect } from "react";
import "../../styles/accountStyles/account.css";
import productImg from "../../assets/default.png";
import "../../styles/accountStyles/wishlist.css";

interface Item {
  productName: string;
  description: string;
  price: number;
  productImg: string;
}

interface WishlistItemProps {
  item: Item;
  onRemove: (productName: string) => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ item, onRemove }) => {
  const { productName, description, price, productImg } = item;

  const handleRemove = () => {
    onRemove(productName);
  };

  return (
    <div className="wishlist-item">
      <img src={productImg} alt="product" />
      <div className="wishlist-infos">
        <h4>{productName}</h4>
        <p>Description: {description}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="action-button">
        <button onClick={handleRemove}>Remove from Wishlist</button>
      </div>
    </div>
  );
};

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<Item[]>([]);

  useEffect(() => {
    const fakeWishlist: Item[] = [
      {
        productImg,
        productName: "Product 1",
        description: "Lorem ipsum 1",
        price: 29.99,
      },
      {
        productImg,
        productName: "Product 2",
        description: "Lorem ipsum 2",
        price: 49.99,
      },
      {
        productImg,
        productName: "Product 3",
        description: "Lorem ipsum 3",
        price: 79.99,
      },
    ];

    setWishlistItems(fakeWishlist);
  }, []);

  const handleRemoveFromWishlist = (productName: string) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.productName !== productName
    );
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="wishlists">
      <h3>Wishlist</h3>
      <div className="my-wishlist">
        {wishlistItems.map((item) => (
          <WishlistItem
            key={item.productName}
            item={item}
            onRemove={handleRemoveFromWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
