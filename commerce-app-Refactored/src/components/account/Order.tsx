import React, { useState, useEffect } from "react";
import productImg from "../../assets/default.png";
import "../../styles/accountStyles/account.css";

interface Order {
  orderId: number;
  date: string;
  status: string;
  totalPrice: number;
  productImg: string;
}

interface OrderCardProps {
  className: string;
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ className, order }) => {
  const { orderId, date, status, totalPrice, productImg } = order;

  return (
    <div className={`order-card ${className}`}>
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

const Order: React.FC = () => {
  const [ordersData, setOrdersData] = useState<Order[]>([]);

  useEffect(() => {
    // Creating some fake orders
    const fakeOrders: Order[] = [
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
          {ordersData.map((order, index) => (
            <OrderCard key={index} className="custom-class" order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
