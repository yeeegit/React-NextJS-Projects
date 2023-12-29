import { Routes, Route } from 'react-router-dom';
import AccountSidebar from '../components/account/AccountSidebar';
import Order from '../components/account/Order';
import Review from '../components/account/Review';
import Wishlist from '../components/account/Wishlist';
import AccountSettings from '../components/account/Settings';
import Help from "./Help";
import '../styles/accountStyles/account.css';

const AccountPage = () => {
  return (
    <div className="account-page">
      <AccountSidebar />
      <div className="all-infos">
        <Routes>
          <Route path="/" element={<h2>welcome to account page</h2>} />
          <Route path="/orders/*" element={<Order />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path='help' element={<Help/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AccountPage;
