import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homePageStyles/subCategoriesNavbar.css";

const SubCategoriesBar: React.FC = () => {
  return (
    <div>
      <div className="categories-nav">
        <ul>
          <li className="list-category">
            <Link className="nav-link" to="/products">
              Woman
            </Link>
          </li>
          <li className="list-category">
            <Link className="nav-link" to="/products">
              Man
            </Link>
            <div className="sub-categories"></div>
          </li>
          <li className="list-category">
            <Link className="nav-link" to="/products">
              kids
            </Link>
            <div className="sub-categories"></div>
          </li>
          <li className="list-category">
            <Link className="nav-link" to="/products">
              electronics
            </Link>
            <div className="sub-categories"></div>
          </li>
          <li className="list-category">
            <Link className="nav-link" to="/products">
              home & life
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubCategoriesBar;
