import { Link, useLocation } from "react-router-dom";
import defaultImg from "../../assets/default.png";
import "../../styles/categoryList/search.css";
import { useCart } from "../../context/CartContext";

const SearchedProducts = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="searched-products">
        {searchResults.length === 0 ? (
          <h4>We couldnt find any item according to your search</h4>
        ) : (
          searchResults.map((product) => (
            <div key={product.id} className="searched-item">
              <Link className="links" to={`/products/${product.id}`}>
                <img
                  className="product-image"
                  src={(product.images[0] && product.images[0]) || defaultImg}
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
