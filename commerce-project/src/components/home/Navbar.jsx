import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import srcImg from "../../assets/search.png";
import "../../styles/homeStyles/navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
      const data = await response.json();

      const searchResults = data.products || [];
      setSearchQuery("");
      navigate("/searched-products", { state: { searchResults } });
    } catch (error) {
      console.error("error searching products:", error);
    }
  };

  return (
    <div className="home-nav">
      <Link to="/" className="logo">
        <h2>LOGO</h2>
      </Link>
      <div className="search">
        <input
          type="text"
          placeholder="Type to Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img src={srcImg} alt="search img" />
        </button>
      </div>
      <div className="nav-links-wrapper">
        <Link className="links" to="account/orders">
          <div className="account">
            <img src={user} alt="user" />
            <p>Account</p>
          </div>
        </Link>
        <Link className="links" to="/cart">
          <div className="cart-page">
            <img src={cart} alt="shopping cart" />
            <p>Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
