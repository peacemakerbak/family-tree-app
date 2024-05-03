// This component handles user login.
// It provides a form for users to enter their email and password.
import React from 'react';
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer'; // Ensure Footer is correctly imported

const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Navigate to Dashboard after login
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the homepage
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to the Forgot Password page
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.navBar}>
        <button onClick={handleBack} className={styles.backButton}>Back</button>
      </div>
      <div className={styles.loginCard}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" className={styles.inputField} placeholder="Email" required />
          <input type="password" className={styles.inputField} placeholder="Password" required />
          <button type="submit" className={styles.loginButton}>Log In</button>
        </form>
        <p className={styles.forgotPasswordLink} onClick={handleForgotPassword}>Forgot Password?</p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
