import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg">Total Mined</h2>
          <p className="text-2xl font-bold text-green-600">$102.50</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg">Referral Earnings</h2>
          <p className="text-2xl font-bold text-blue-600">$30.00</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
