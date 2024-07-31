import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AccountPage from './components/AccountPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<AccountPage />} />
          <Route
            path="/"
            element={
              <div className="text-center mt-5">
                <h1>Welcome to the User Management App</h1>
                <p className="lead">
                  This application helps you manage your user accounts efficiently.
                  <br />
                  You can log in, register, and manage your profile easily.
                </p>
                <div className="mt-4">
                  <h4>Getting Started</h4>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
