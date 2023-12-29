import { useState } from 'react';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAnswer = (e) => {
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
  

export default FaqItem