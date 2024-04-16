// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (you can use a more robust mechanism here)
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    // Perform login logic, set token or user credentials if needed
    // For demonstration, we'll set a dummy token in local storage
    localStorage.setItem('token', 'dummy_token');
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic, remove token or user credentials if needed
    // For demonstration, we'll remove the dummy token from local storage
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
