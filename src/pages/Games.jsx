import React from 'react';

const Games = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Games & Casino 🎮</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Lucky Spin</h2>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded">Play</button>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Mine Game</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Play</button>
        </div>
      </div>
    </div>
  );
};

export default Games;
