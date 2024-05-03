import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer'; // Adjust path as necessary
import styles from './ForgotPassword.module.css'; // Ensure you have CSS module for styling

const ForgotPassword = () => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle password reset here
    alert('Password reset link sent!');
    navigate('/login'); // Redirect to login page after action
  };

  const handleBack = () => {
    navigate('/login'); // Navigate back to the login page
  };

  return (
    <div className={styles.container}>
      <button onClick={handleBack} className={styles.backButton}>Back</button>
      <div className={styles.card}>
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" className={styles.input} placeholder="Enter your email" required />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
