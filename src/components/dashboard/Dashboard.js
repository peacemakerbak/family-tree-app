// Dashboard.js
// This component serves as the main dashboard for users.
// It displays the user's information and provides forms to add family members' details.

import React, { useState } from 'react';

const Dashboard = () => {
  const [familyMembers, setFamilyMembers] = useState([{name: '', email: ''}]);

  const handleAddSibling = () => {
    setFamilyMembers([...familyMembers, {name: '', email: ''}]);
  };

  const handleInputChange = (index, event) => {
    const values = [...familyMembers];
    values[index][event.target.name] = event.target.value;
    setFamilyMembers(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send invites will go here
  };

  return (
    <div>
      <h1>Your Dashboard</h1>
      <div>
        <p>Name: User's Name</p>
        <p>Email: user@example.com</p>
      </div>
      <form onSubmit={handleSubmit}>
        {familyMembers.map((member, index) => (
          <div key={index}>
            <input
              name="name"
              type="text"
              placeholder="Family Member's Name"
              value={member.name}
              onChange={event => handleInputChange(index, event)}
            />
            <input
              name="email"
              type="email"
              placeholder="Family Member's Email"
              value={member.email}
              onChange={event => handleInputChange(index, event)}
            />
          </div>
        ))}
        <button onClick={handleAddSibling}>Add Sibling</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
