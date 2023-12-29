import { useState, useEffect } from "react";
import productImg from "../../assets/default.png";
import "../../styles/accountStyles/account.css";

const OrderCard = ({ order }) => {
  const { orderId, date, status, totalPrice, productImg } = order;

  return (
    <div className="order-card">
      <img src={productImg} alt="product" />
      <div className="order-infos">
        <h4>Order ID: {orderId}</h4>
        <p>Date: {date}</p>
        <p>Status: {status}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

const Order = () => {
  const [ordersData, setOrdersData] = useState([]);

  // since we do not have real api to get users orders i made built in orders for demonstration
  // example usage for data fetching from api
  //   useEffect(() => {
  //     fetch(`https://yourApi.com/users/${user.userId}/orders`)
  //       .then(response => response.json())
  //       .then(data => setOrdersData(data))
  //       .catch(error => console.error('error fetching orders', error));
  // }, [user.userId]);

  useEffect(() => {
    // Creating some fake orders
    const fakeOrders = [
      {
        productImg: productImg,
        orderId: 1,
        date: "2023-01-01",
        status: "Shipped",
        totalPrice: 49.99,
      },
      {
        productImg: productImg,
        orderId: 2,
        date: "2023-02-19",
        status: "Processing",
        totalPrice: 75.99,
      },
      {
        productImg: productImg,
        orderId: 3,
        date: "2023-09-21",
        status: "Delivered",
        totalPrice: 99.99,
      },
      {
        productImg: productImg,
        orderId: 4,
        date: "2023-05-11",
        status: "Canceled",
        totalPrice: 5.99,
      },
    ];

    setOrdersData(fakeOrders);
  }, []);

  return (
    <div>
      <div className="orders">
        <h3>Orders</h3>
        <div className="my-orders">
          {ordersData.map((order) => (
            <OrderCard
              className="order-card"
              key={order.orderId}
              order={order}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
