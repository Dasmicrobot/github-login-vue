import React, { useContext, useEffect, useState } from 'react';
import {
  getToken,
  handleAuthRedirect,
  hasToken,
  loginWithRedirect,
  logout
} from './authClient';

export const AuthContext = React.createContext({});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({
  children
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [token, setToken] = useState(null);
  const [initializationError, setInitializationError] = useState(null);

  useEffect(() => {
    const initAndGetAccessToken = async () => {
      if (window.location.search.includes('access_token=')) {
        await handleAuthRedirect();
      } else {
        if (hasToken()) {
          setIsAuthenticated(true);
          setToken(getToken());
        } else {
          setIsAuthenticated(false);
          setToken(null);
        }
      }
    };

    initAndGetAccessToken()
      .then(() => setInitializing(false))
      .catch(e => {
        console.error('initAuth failure', e);
        setInitializing(false);
        setInitializationError(e);
      });

  }, []);

  return (
    <AuthContext.Provider
      value={{
        initializing,
        initializationError,
        isAuthenticated,
        token,
        loginWithRedirect: (...p) => loginWithRedirect(...p),
        logout: (...p) => logout(...p)
      }}
    >
      {!initializing && children}
    </AuthContext.Provider>
  );
};
