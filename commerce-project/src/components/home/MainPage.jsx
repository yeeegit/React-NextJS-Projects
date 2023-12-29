import { useRef } from 'react';
import "../../styles/homeStyles/mainpage.css";
import clockImage from "../../assets/clock.png";

const MainPage = () => {
  const categoriesRef = useRef(null);

  const handleShopNowClick = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView();
    }
  };

  return (
    <div>
      <div className="main-page">
        <div className="main-wrapper">
          <div className="text-wrap">
            <h1>Whatever you want at </h1>
            <h1>Your door within 24 hours</h1>
          </div>
          <button onClick={handleShopNowClick}>Shop Now</button>
        </div>
        <img src={clockImage} alt="clock" />
      </div>
      <div ref={categoriesRef} ></div>
    </div>
  );
};

export default MainPage;
