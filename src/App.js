import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './LoginRegister/Login';
import { AuthProvider } from './AuthContext';
import Register from './LoginRegister/Register';
import './App.css';

import LandingPage from './LoginRegister/LandingPage';

function App() {
  return (
    <Router>
      {/* <div className="app"> */}
        {/* Render the navbar only if the current path is not "/login" */}
        <AuthProvider>
        <Routes>
          <Route path="/landing_page" element={<RenderNavBar  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Other routes go here */}
        </Routes>
        </AuthProvider>
      {/* </div> */}
    </Router>
  );
}

// Component to conditionally render the NavBar based on location
function RenderNavBar() {
  const location = useLocation();

  // Do not render NavBar if the current location is "/login"
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return <LandingPage />;
}

export default App;
