import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRouter = ({ ...rest }) => {
  const auth = useAuth();
  if (auth === null || auth === 0) return <Redirect to="/login" />;
  return (
    <div>
      <Route {...rest} />
    </div>
  );
};

export default PrivateRouter;
