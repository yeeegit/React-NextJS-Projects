import React from 'react';
import FaqItem from '../faq/FaqItem';
import '../../styles/help.css';

const FaqTrusted: React.FC = () => {
  return (
    <>
      <FaqItem
        question="trusted q 1"
        answer="trusted a 1"
      />
      <FaqItem
        question="trusted q 2"
        answer="trusted q 2"
      />
    </>
  );
};

export default FaqTrusted;
