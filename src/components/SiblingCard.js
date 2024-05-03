import React from 'react';
import './SiblingCard.css';

const SiblingCard = ({ name, relationship }) => {
  return (
    <div className="sibling-card">
      {/* Display sibling's name and relationship */}
      <h3>{name}</h3>
      <p>{relationship}</p>
      {/* Expandable card content */}
      {/* Logic for adding siblings' children */}
    </div>
  );
};

export default SiblingCard;

