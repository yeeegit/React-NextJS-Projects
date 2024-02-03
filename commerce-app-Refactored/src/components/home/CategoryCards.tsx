import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import defaultImage from '../../assets/default.png';
import '../../styles/homePageStyles/categoryCards.css';
import { Item } from '../../context/ContextTypes';

interface Category {
  name: string;
}

interface CategoryData {
  name: string;
  price: string;
  image: string;
}

const fetchCategoryData = async (categoryName: string): Promise<CategoryData> => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
    const categoryData = response.data;

    const categoryInfo = categoryData.find((product:Item) => product.category === categoryName);
    
    return {
      name: categoryName,
      price: categoryInfo ? categoryInfo.price + "$" : "?$",
      image: categoryInfo?.image || defaultImage,
    };
  } catch (error) {
    console.error(`Error fetching data for category: ${categoryName}`, error);
    return {
      name: "unknown category",
      price: "$?",
      image: defaultImage,
    };
  }
};

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const [categoryData, setCategoryData] = useState<CategoryData>({
    name: "",
    price: "",
    image: defaultImage,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategoryData(category.name);
      setCategoryData(data);
    };

    fetchData();
  }, [category.name]);

  return (
    <Link to="/products" className="links">
      <div className="product-card">
        <img src={categoryData.image} alt={categoryData.name} className="product-image" />
        <div className="product-text-wrapper">
          <h3 className="product-title">{categoryData.name}</h3>
          <p className="product-price">
            <span>Starting From </span>
            {categoryData.price}
            <span className="categoryLink">See all <span>{categoryData.name}</span></span>
          </p>
        </div>
      </div>
    </Link>
  );
};

const CategoryCards: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        const categoryNames: string[] = response.data;

        const categoriesWithImages = await Promise.all(
          categoryNames.map(async (categoryName) => fetchCategoryData(categoryName))
        );

        setCategories(categoriesWithImages);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="products-wrapper">
      <div className="product-list">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
