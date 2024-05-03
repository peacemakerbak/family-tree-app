import React from 'react';
import './WebTree.css';
import ParentCard from './ParentCard';
import SiblingCard from './SiblingCard';

const WebTree = ({ parents = [], siblings = [] }) => {
  return (
    <div className="web-tree-container">
      {/* Main card with text "This is you" */}
      <div className="main-card">
        <p>This is you.</p>
      </div>
      {/* Parent cards at the top */}
      <div className="parent-cards">
        {parents.map((parent, index) => (
          <ParentCard key={index} name={parent.name} relationship={parent.relationship} />
        ))}
        {parents.length === 0 && <p>No parent data available.</p>}
      </div>
      {/* Sibling cards on the sides */}
      <div className="sibling-cards">
        {siblings.map((sibling, index) => (
          <SiblingCard key={index} name={sibling.name} relationship={sibling.relationship} />
        ))}
        {siblings.length === 0 && <p>No sibling data available.</p>}
      </div>
    </div>
  );
};

export default WebTree;


