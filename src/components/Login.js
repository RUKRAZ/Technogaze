import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = (props:Props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/post_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        navigate('/services'); // Redirect to the dashboard page
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.'); // Set error message from response
      }
      } catch (error) {
        setErrorMessage('An error occurred. Please try again later.'); // Set generic error message for network errors
     }
  };


  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="flex w-1/2 bg-gray-100 justify-center items-center">
        <div className="text-center">
          <img src="./img/baydevelopslogo.svg" alt="Company Logo" className="mx-auto"/>
          <h1 className="m-0 relative font-bold mt-4 justify-end">Network Infrastructure Solutions</h1>
          <p className="text-white mt-4">Everything you need in an one dashboard.</p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex w-1/2 justify-center items-center bg-white p-12">
        <div className="max-w-fit w-full">
          <h2 className="text-3xl font-bold mb-2">Sign In to your Account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
             <button type="sub" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;