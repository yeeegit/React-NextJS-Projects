import React, { useState, useEffect, useCallback } from "react";
import ReviewModal from "./ReviewModal";
import defaultImg from "../../assets/default.png";
import "../../styles/accountStyles/account.css";

interface Order {
  orderId: number;
  date: string;
  status: string;
  totalPrice: number;
}

interface OrderCardProps {
  order: Order;
  openReviewModal: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, openReviewModal }) => {
  const { orderId, date, status, totalPrice } = order;

  return (
    <div className="order-card">
      <img src={defaultImg} alt="product" />
      <div className="order-infos">
        <h4>Order ID: {orderId}</h4>
        <p>Date: {date}</p>
        <p>Status: {status}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <div className="review-button">
        <button className="review-btn" onClick={openReviewModal}>
          Review This Product
        </button>
      </div>
    </div>
  );
};

const Review: React.FC = () => {
  const [ordersData, setOrdersData] = useState<Order[]>([]);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fakeOrders: Order[] = [
      {
        orderId: 1,
        date: "2023-01-01",
        status: "Shipped",
        totalPrice: 49.99,
      },
      {
        orderId: 2,
        date: "2023-02-19",
        status: "Processing",
        totalPrice: 75.99,
      },
      {
        orderId: 3,
        date: "2023-09-21",
        status: "Delivered",
        totalPrice: 99.99,
      },
      {
        orderId: 4,
        date: "2023-05-11",
        status: "Canceled",
        totalPrice: 5.99,
      },
    ];

    setOrdersData(fakeOrders);
  }, []);

  const openReviewModal = useCallback(() => {
    setIsReviewModalOpen(true);
  }, []);

  const closeReviewModal = useCallback(() => {
    setIsReviewModalOpen(false);
  }, []);

  return (
    <div>
      <div className="reviews">
        <h3>Reviews</h3>
        <div className="my-orders">
          {ordersData.map((order) => (
            <OrderCard
              key={order.orderId}
              order={order}
              openReviewModal={openReviewModal}
            />
          ))}
        </div>
      </div>

      {isReviewModalOpen && <ReviewModal closeModal={closeReviewModal} />}
    </div>
  );
};

export default Review;
