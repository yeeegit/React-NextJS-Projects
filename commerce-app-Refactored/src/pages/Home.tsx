import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import {
  Navbar,
  SubCategoriesBar,
  MainPage,
  CategoryCards,
  About,
  Footer,
  Cart,
} from "../utils/homeComponentImports.ts";
import {
  AccountPage,
  Order,
  Review,
  Settings,
  Wishlist,
} from "../utils/multipleImports.ts";

import ProductPage from "./ProductPage.tsx";
import SearchedProducts from "../components/category/SearchedProducts";
import Categories from "./Categories.tsx";
import Help from "./Help.tsx";
import NotFoundError from "../NotFoundError.tsx";
import "../styles/homePageStyles/home.css";
import FaqWarranty from "../components/faq/FaqWarranty.tsx";
import FaqDelivery from "../components/faq/FaqDelivery.tsx";
import FaqTrusted from "../components/faq/FaqTrusted.tsx";
import FaqPayment from "../components/faq/FaqPayment.tsx";

const Home = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  return (
    <div className="home-page">
      <Navbar setSearchResults={setSearchResults} />
      <SubCategoriesBar></SubCategoriesBar>

      <Routes>
        <Route path="*" element={<NotFoundError />} />

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
