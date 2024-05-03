import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/auth/ForgotPassword'; 
import ParentCard from './components/ParentCard'; // Import new component
import SiblingCard from './components/SiblingCard'; // Import new component
import ZoomControls from './components/ZoomControls'; // Import new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/parent-card" element={<ParentCard />} /> {/* New route */}
        <Route path="/sibling-card" element={<SiblingCard />} /> {/* New route */}
        <Route path="/zoom-controls" element={<ZoomControls />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;


