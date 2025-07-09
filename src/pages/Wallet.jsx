import React from 'react';

const Wallet = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Wallet</h1>
      <div className="p-4 bg-white rounded shadow mb-6">
        <h2 className="text-lg mb-2">Balance</h2>
        <p className="text-2xl text-green-500 font-bold">$250.00</p>
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Withdraw</button>
      </div>
    </div>
  );
};

export default Wallet;
