import React from 'react';
import FaqItem from '../faq/FaqItem';
import '../../styles/help.css';

const FaqWarranty: React.FC = () => {
  return (
    <>
      <FaqItem
        question="warranty question 1"
        answer="warranty answer 1"
      />
      <FaqItem
        question="warranty question 2"
        answer="warranty answer 2"
      />
    </>
  );
};

export default FaqWarranty;
