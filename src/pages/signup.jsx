import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gray-100 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <form>
          <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Full Name" />
          <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" />
          <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" />
          <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Referral Code (Optional)" />
          <button className="w-full bg-green-500 text-white py-2 rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
