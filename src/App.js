import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/auth/ForgotPassword'; 
import ParentCard from './components/ParentCard'; 
import SiblingCard from './components/SiblingCard'; 
import ZoomControls from './components/ZoomControls'; 
import WebTree from './components/WebTree';


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
        <Route path="/web" element={<WebTree />} />
      </Routes>
    </Router>
  );
}

export default App;


