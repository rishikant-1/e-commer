import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import TopLoader from '../common/TopLoader.jsx';

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = true; 

  useEffect(() => {
    setIsAuthenticated(!!token);
    setLoading(false);
  }, [token]);

  if (loading) {
    return <TopLoader isLoading={loading} />;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
