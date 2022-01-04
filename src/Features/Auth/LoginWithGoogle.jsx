import { useEffect } from 'react';
import { signInWithGoogle, auth } from '../../Firebase/index';
import React from 'react';

const LoginWithGoogle = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      const { uid, photoURL, displayName, email, emailVerified } = user;
      const token = await user.getIdToken();
      const dataGoogle = {
        uid,
        photoURL,
        name: displayName,
        email,
        confirmed: emailVerified,
        tokenGoogle: token,
      };

      console.log(dataGoogle);
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <button onClick={signInWithGoogle}>click</button>
    </div>
  );
};

export default LoginWithGoogle;
