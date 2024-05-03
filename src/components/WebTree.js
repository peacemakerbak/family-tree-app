// WebTree.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WebTree.css'; 
import ParentCard from './ParentCard'; 
import SiblingCard from './SiblingCard'; 

const WebTree = () => {
  // Dummy data for parents and siblings
  const parents = [
    { name: 'John', relationship: 'Dad' },
    { name: 'Mary', relationship: 'Mom' }
  ];

  const siblings = [
    { name: 'Michael', relationship: 'Brother' },
    { name: 'Emily', relationship: 'Sister' },
    { name: 'Sophia', relationship: 'Sister' }
  ];

  return (
    <div className="web-tree-container">
      <Link to="/dashboard" className="back-button">Edit</Link>
      {/* Main card with text "This is you" */}
      <div className="main-card">
        <p>This is you.</p>
      </div>
      {/* Parent cards at the top */}
      <div className="parent-cards">
        {parents.map((parent, index) => (
          <ParentCard key={index} name={parent.name} relationship={parent.relationship} />
        ))}
      </div>
      {/* Sibling cards on the sides */}
      <div className="sibling-cards">
        {siblings.map((sibling, index) => (
          <SiblingCard key={index} name={sibling.name} relationship={sibling.relationship} />
        ))}
      </div>
    </div>
  );
};

export default WebTree;


