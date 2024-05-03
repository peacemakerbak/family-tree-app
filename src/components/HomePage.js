// HomePage.js
// This is the landing page component of the Family Tree App.
// It includes a signup form for new users and a link to the login page for existing users.

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Family Tree Project</h1>
      <p>Build your family tree and connect with your lineage.</p>
      <div style={{border: '1px solid blue'}}>
        <h2>Create Account</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </div>
  );
}

export default HomePage;

