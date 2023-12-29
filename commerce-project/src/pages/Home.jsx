import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import {
  FaqWarranty,
  FaqPayment,
  FaqTrusted,
  FaqDelivery,
} from "../utils/helpComponents.js";

import {
  Navbar,
  SubCategoriesBar,
  MainPage,
  CategoryCards,
  About,
  Footer,
  Cart,
} from "../utils/homeComponents.js";

import {
  AccountPage,
  Order,
  Settings,
  Wishlist,
  Review,
  Help,
} from "../utils/multiImports.js";

import SearchedProducts from "../components/category/SearchedProducts.jsx";
import Categories from "./Categories.jsx";
import ProductPage from "./ProductPage.jsx";
import NotFound404 from "../NotFound404";

import "../styles/homeStyles/home.css";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="home-page">
      <Navbar setSearchResults={setSearchResults} />
      <SubCategoriesBar></SubCategoriesBar>

      <Routes>
        <Route path="*" element={<NotFound404 />} />

        <Route
          path="/"
          element={
            <>
              <MainPage />
              <CategoryCards />
            </>
          }
        />

        <Route path="/products" element={<Categories />} />
        <Route
          path="/searched-products"
          element={<SearchedProducts searchResults={searchResults} />}
        />

        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="/account/*" element={<AccountPage />}>
          <Route index element={<h1>Welcome to your account!</h1>} />
          <Route path="orders" element={<Order />} />
          <Route path="reviews" element={<Review />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/help/*" element={<Help />}>
          <Route path="warranty" element={<FaqWarranty />} />
          <Route path="delivery" element={<FaqDelivery />} />
          <Route path="trusted" element={<FaqTrusted />} />
          <Route path="payment" element={<FaqPayment />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
