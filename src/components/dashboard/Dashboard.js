// This component serves as the main dashboard for users.
// It displays the user's basic profile information and allows the user to add details for multiple family members.
// Users can dynamically add more fields to input additional family members.

import React, { useState } from 'react';

const Dashboard = () => {
  // State to hold the list of family members. Each member is an object with 'name' and 'email'.
  const [familyMembers, setFamilyMembers] = useState([{name: '', email: ''}]);

  // Function to add an empty member to the familyMembers state, allowing the user to input another family member's details.
  const handleAddSibling = () => {
    setFamilyMembers([...familyMembers, {name: '', email: ''}]);
  };

  // Function to update the state as the user types in input fields.
  // It updates the specific member's name or email based on which input field is being edited.
  const handleInputChange = (index, event) => {
    const values = [...familyMembers]; // Create a copy of the familyMembers array
    values[index][event.target.name] = event.target.value; // Update the value of the input field that was changed
    setFamilyMembers(values); // Set the new state
  };

  // Function to handle the form submission.
  // This would typically involve validating the data and sending it to a server.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Logic to send invites or save data would go here.
    console.log(familyMembers); // This line could be used for debugging to see the state when form is submitted
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
        <button type="button" onClick={handleAddSibling}>Add Sibling</button> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
