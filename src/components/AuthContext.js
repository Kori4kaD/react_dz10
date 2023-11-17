import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  const toggleAuthentication = () => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', 'your_token_value_here');
    }
    setAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);