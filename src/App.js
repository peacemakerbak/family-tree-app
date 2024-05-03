import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/auth/ForgotPassword'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> // Added ForgotPassword route
      </Routes>
    </Router>
  );
}

export default App;

