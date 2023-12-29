import { Routes, Route, Link } from "react-router-dom";
import {
  FaqWarranty,
  FaqPayment,
  FaqTrusted,
  FaqDelivery,
} from "../utils/helpComponents";
import "../styles/help.css";

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-sidebar">
        <h2>Help Topics</h2>
        <ul>
          <li>
            <Link to="/help/warranty">Product Warranty</Link>
          </li>
          <li>
            <Link to="/help/delivery">Delivery</Link>
          </li>
          <li>
            <Link to="/help/trusted">Is this website trusted?</Link>
          </li>
        </ul>
      </div>
      <div className="help-content">
        <h1>Help Center</h1>
        <Routes>
          <Route
            path="/"
            element={
              <h2 style={{ textAlign: "center", padding: "1rem" }}>
                default text
              </h2>
            }
          />
          <Route path="/warranty/*" element={<FaqWarranty />} />
          <Route path="/delivery/*" element={<FaqDelivery />} />
          <Route path="/trusted/*" element={<FaqTrusted />} />
          <Route path="/payment/*" element={<FaqPayment />} />
        </Routes>
      </div>
    </div>
  );
};

export default Help;
