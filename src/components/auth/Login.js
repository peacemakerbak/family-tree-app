import React from 'react';
import { useNavigate } from 'react-router-dom';

// Login component definition
const Login = () => {
  let navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Navigate to Dashboard after successful login
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Form for user login */}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;

