import React from 'react';
import { Route } from 'react-router-dom';

const PublicRouter = ({ ...rest }) => {
  return (
    <div>
      <Route {...rest} />
    </div>
  );
};

export default PublicRouter;
