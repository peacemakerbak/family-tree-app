import React from 'react';
import { Link } from 'react-router-dom';

// HomePage component definition
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Family Tree Project</h1>
      <p>Build your family tree and connect with your lineage.</p>
      {/* Container for the sign-up form with a styled border */}
      <div style={{border: '1px solid blue'}}>
        <h2>Create Account</h2>
        {/* Form for new users to sign up */}
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        {/* Link to the login page for existing users */}
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </div>
  );
}

export default HomePage;

