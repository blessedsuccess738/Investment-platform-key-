import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gray-100 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" />
          <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" />
          <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
