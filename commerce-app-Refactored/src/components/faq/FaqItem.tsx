import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/help.css';


interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <Link to="/" onClick={toggleAnswer} className="toggle">
        {question} {isOpen ? '-' : '+'}
      </Link>
      <div className="content" style={{ maxHeight: isOpen ? 'fit-content' : '0', padding: isOpen ? '1rem 0.3rem' : '0' }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
