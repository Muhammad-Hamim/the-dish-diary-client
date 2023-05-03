import React, { createContext } from 'react';
import getAuth from 'firebase/auth'
import app from '../../../../../../Firebase/firebase-auth-recap/src/firebase/firebase.config';

const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const AuthContext = createContext(null);
  const user = null;
  const AuthInfo = {
    user
  };
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;