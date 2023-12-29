import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/productStyles/productPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("fetching data", error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <p>We are searching...</p>;
  }

  const handleImageChange = (newImage) => {
    setActiveImage(newImage);
  };

  return (
    <div>
      <div className="product-page">
        <div className="image-container">
          <img
            className="product-image"
            src={activeImage || product.thumbnail}
            alt="Product"
          />
          <div className="thumbnail-container">
            {[product.thumbnail, ...product.images].map((image, index) => (
              <img
                key={index}
                className="thumbnail"
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageChange(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <div className="product-title">
            <h3>{product.title}</h3>
            <p>Product ID: {id}</p>
          </div>
          <div className="product-description">
            <p>{product.description || "No description is available."}</p>
          </div>
          <div className="product-price">Price: ${product.price}</div>
          <div className="product-rating">Rating: {product.rating}</div>
          <div className="product-stock">Stock: {product.stock}</div>
          <div className="add-to-cart">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;