import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Mining from './pages/Mining';
import Games from './pages/Games';
import Navbar from './components/Navbar';

function App() {
  const isLoggedIn = true; // Replace with auth logic

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </>
  );
}

export default App;
