import React from 'react';
import { Navigate } from 'react-router-dom';
import TopLoader from '../common/TopLoader.jsx';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, allowedRole }) {
  const { user, status } = useSelector(state => state.auth);

  const isLoading = status === 'loading' || status === 'idle';

  return (
    <>
      <TopLoader isLoading={isLoading} />
      {isLoading ? null : !user || (allowedRole && user.role !== allowedRole) ? (
        <Navigate to="/auth/user-login" replace />
      ) : (
        children
      )}
    </>
  );
}

export default ProtectedRoute;
