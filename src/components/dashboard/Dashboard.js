import React, { useState } from 'react';

// Dashboard component definition
const Dashboard = () => {
  const [familyMembers, setFamilyMembers] = useState([{name: '', email: ''}]);

  // Function to add another sibling input form
  const handleAddSibling = () => {
    setFamilyMembers([...familyMembers, {name: '', email: ''}]);
  };

  // Function to handle changes in the input fields
  const handleInputChange = (index, event) => {
    const values = [...familyMembers];
    values[index][event.target.name] = event.target.value;
    setFamilyMembers(values);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send invites will go here
    console.log('Submitted:', familyMembers);
  };

  return (
    <div>
      <h1>Your Dashboard</h1>
      <h2>Your Info</h2>
      {/* Display user info card */}
      <div>
        <p>Name: User's Name</p>
        <p>Email: user@example.com</p>
      </div>
      {/* Form for entering family members' details */}
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
