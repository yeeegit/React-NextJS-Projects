import { Link } from "react-router-dom";
import "../../styles/accountStyles/accountSidebar.css";

const AccountSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="section">
          <h4>My Orders</h4>
          <ul>
            <li>
              <Link className="links" to="/account/orders">
                All Orders
              </Link>
            </li>
            <li>
              <Link className="links" to="/account/reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link className="links" to="/account/wishlist">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4>My Account & Help</h4>
          <ul>
            <li>
              <Link className="links" to="/account/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link className="links" to="/help">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountSidebar;
