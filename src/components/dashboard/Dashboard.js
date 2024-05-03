import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [parents, setParents] = useState([
    { name: '', relationship: 'Mom' },
    { name: '', relationship: 'Dad' }
  ]);

  const [siblings, setSiblings] = useState([
    { name: '', relationship: 'Brother' },
    { name: '', relationship: 'Sister' },
    { name: '', relationship: 'Sister' }
  ]);

  const handleAddSibling = () => {
    setSiblings([...siblings, { name: '', relationship: '' }]);
  };

  const handleDeleteSibling = (index) => {
    const updatedSiblings = siblings.filter((_, i) => i !== index);
    setSiblings(updatedSiblings);
  };

  const handleParentInputChange = (index, event) => {
    const values = [...parents];
    values[index][event.target.name] = event.target.value;
    setParents(values);
  };

  const handleSiblingInputChange = (index, event) => {
    const values = [...siblings];
    values[index][event.target.name] = event.target.value;
    setSiblings(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle submission
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar">
        <div className="username">User's Name</div>
        <button className="logout-button">Logout</button>
      </div>
      <div>
        <h3 className="h3-description"> Fill out your immediate family members & lets get to building! </h3>
      </div>
      <div className="dashboard-card">
        <form onSubmit={handleSubmit}>
          <div className="dashboard-section">
            <h2>Parents</h2>
            <div className="family-group">
              {parents.map((parent, index) => (
                <div key={index} className="family-member">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={parent.name}
                    onChange={(e) => handleParentInputChange(index, e)}
                  />
                  <select
                    name="relationship"
                    value={parent.relationship}
                    onChange={(e) => handleParentInputChange(index, e)}
                  >
                    <option value="Mom">Mom</option>
                    <option value="Dad">Dad</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard-section">
            <h2>Siblings</h2>
            <div className="family-group">
              {siblings.map((sibling, index) => (
                <div key={index} className="family-member">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={sibling.name}
                    onChange={(e) => handleSiblingInputChange(index, e)}
                  />
                  <select
                    name="relationship"
                    value={sibling.relationship}
                    onChange={(e) => handleSiblingInputChange(index, e)}
                  >
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                  </select>
                  {index >= 3 && (
                    <button className="delete-button" type="button" onClick={() => handleDeleteSibling(index)}>x</button>
                  )}
                </div>
              ))}
              <button className="add-button" type="button" onClick={handleAddSibling}>+</button>
            </div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
