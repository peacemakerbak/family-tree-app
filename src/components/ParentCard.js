import React from 'react';
import './ParentCard.css';

const ParentCard = ({ name, relationship }) => {
  // Logic to handle expandable card and adding grandparents and siblings
  
  return (
    <div className="parent-card">
      {/* Display parent's name and relationship */}
      <h3>{name}</h3>
      <p>{relationship}</p>
      {/* Expandable card content */}
      {/* Logic for adding grandparents and siblings */}
    </div>
  );
};

export default ParentCard;
