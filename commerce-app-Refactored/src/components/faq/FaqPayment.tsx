import React from 'react';
import FaqItem from '../faq/FaqItem';
import '../../styles/help.css';

const FaqPayment: React.FC = () => {
  return (
    <>
      <FaqItem question="payment  q 1" answer="payment a 1" />
      <FaqItem question="payment q 2" answer="payment a 2" />
    </>
  );
};

export default FaqPayment;
