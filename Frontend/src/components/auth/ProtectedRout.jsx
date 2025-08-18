import React from 'react';
import { Navigate } from 'react-router-dom';
import TopLoader from '../common/TopLoader.jsx';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, allowedRole }) {
  const { user, status } = useSelector(state => state.auth);

  // if (status === 'loading') {
  //   return <TopLoader isLoading={true} />;
  // }
  // if(status === 'success' || status === 'rejected'){
  //   return <TopLoader isLoading={false} />;
  // }

  if (!user || (allowedRole && user.role !== allowedRole)) {
    return <Navigate to="/auth/user-login" replace />;
  }

  return children;
}

export default ProtectedRoute;
