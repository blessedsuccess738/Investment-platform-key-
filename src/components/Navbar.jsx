import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-bold">⛏️ Naira Mining</div>
      <ul className="flex gap-6">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/mining">Mining</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><button className="text-red-500">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
