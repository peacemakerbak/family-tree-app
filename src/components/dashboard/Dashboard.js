import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // State to hold parent information
  const [parents, setParents] = useState([
    { name: '', relationship: 'Mom', email: '' },
    { name: '', relationship: 'Dad', email: '' }
  ]);

  // State to hold sibling information
  const [siblings, setSiblings] = useState([
    { name: '', relationship: 'Brother', email: '' },
    { name: '', relationship: 'Sister', email: '' },
    { name: '', relationship: 'Sister', email: '' }
  ]);

  // Function to add an empty sibling input field
  const handleAddSibling = () => {
    setSiblings([...siblings, { name: '', relationship: '', email: '' }]);
  };

  // Function to remove a sibling input field
  const handleDeleteSibling = (index) => {
    const updatedSiblings = [...siblings];
    updatedSiblings.splice(index, 1);
    setSiblings(updatedSiblings);
  };

  // Function to handle input changes for parents
  const handleParentInputChange = (index, event) => {
    const values = [...parents];
    values[index][event.target.name] = event.target.value;
    setParents(values);
  };

  // Function to handle input changes for siblings
  const handleSiblingInputChange = (index, event) => {
    const values = [...siblings];
    values[index][event.target.name] = event.target.value;
    setSiblings(values);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send emails and handle submission
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar">
        <div className="username">User's Name</div>
        <button className="logout-button">Logout</button>
      </div>
      <div>
      <h3 className="h3-description"> Fill our your immidiate family members & we'll do the rest! </h3>
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
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={parent.email}
                    onChange={(e) => handleParentInputChange(index, e)}
                  />
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
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={sibling.email}
                    onChange={(e) => handleSiblingInputChange(index, e)}
                  />
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
