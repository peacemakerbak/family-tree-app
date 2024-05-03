// This is the landing page component of the Family Tree App.
// It includes a signup form for new users and a link to the login page for existing users.

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="welcome-card">
        <h1>Welcome to the Family Tree Project</h1>
        <p>Build your family tree and connect with your lineage.</p>
      </div>
      <div className="signup-container">
        <h2 className="signup-title">Create Account</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Already have an account? Log in</Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;



