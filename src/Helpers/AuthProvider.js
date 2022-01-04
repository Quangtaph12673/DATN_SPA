import { createContext } from 'react';
import { getPermission } from '../utils/utils';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let auth = getPermission();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
