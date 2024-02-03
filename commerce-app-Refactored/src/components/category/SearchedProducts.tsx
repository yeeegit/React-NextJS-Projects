import React from "react";
import { Link, useLocation } from "react-router-dom";
import defaultImg from "../../assets/default.png";
import "../../styles/categoryListStyles/search.css";
import {useCart} from "../../context/CartContext";
import { Item } from "../../context/ContextTypes";

interface SearchedProductsProps {
  searchResults: string[];
}

const SearchedProducts: React.FC<SearchedProductsProps> = () => {
  const location = useLocation();
  const searchResults: Item[] = location.state?.searchResults || [];
  const { addToCart } = useCart();

  const handleAddToCart = (product: Item) => {
    addToCart(product);
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="searched-products">
        {searchResults.length === 0 ? (
          <h4>We couldn't find any item according to your search</h4>
        ) : (
          searchResults.map((product) => (
            <div key={product.id} className="searched-item">
              <Link className="links" to={`/products/${product.id}`}>
                <img
                  className="product-image"
                  src={(product.image || defaultImg) as string}
                  alt={product.title || "Product"}
                />
                <h5 className="product-title">{product.title}</h5>
                <div className="search-wraps">
                  <p>${product.price}</p>
                </div>
              </Link>
              <button
                className="add-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchedProducts;
