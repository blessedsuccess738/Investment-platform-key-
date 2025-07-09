import React, { useState, useEffect } from 'react';

const Mining = () => {
  const [mining, setMining] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let timer;
    if (mining) {
      timer = setInterval(() => {
        setBalance((prev) => +(prev + 0.02).toFixed(2)); // $0.02 per second (for demo)
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [mining]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Mining</h1>
      <div className="bg-white p-6 rounded shadow">
        <p className="text-lg mb-2">Current Mined: <strong>${balance}</strong></p>
        <button
          onClick={() => setMining(!mining)}
          className={`px-4 py-2 rounded ${mining ? 'bg-red-500' : 'bg-green-600'} text-white`}
        >
          {mining ? 'Stop Mining' : 'Start Mining'}
        </button>
      </div>
    </div>
  );
};

export default Mining;
