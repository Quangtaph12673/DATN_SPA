import React from 'react';
import { useEffect } from 'react';
import { signInWithFacebook, auth } from '../../Firebase/index';

const LoginWithFacebook = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      {' '}
      <button onClick={signInWithFacebook}>click</button>
    </div>
  );
};

export default LoginWithFacebook;
