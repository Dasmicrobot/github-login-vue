import { useState, useEffect } from 'react'

function HomePage() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(window.sessionStorage.getItem('github_access_token') != null);
  }, []);

  const startSequence = () => window.location.href = 'https://api.app.gitactivity.com/oauth/github/login';
  const logout = () => {
    setIsAuthenticated(false);
    window.sessionStorage.removeItem('github_access_token');
  };

  return (<div>
    <img src="/logo.svg" alt="logo" width="200" height="100" />
    <div className="github-login">
      {!isAuthenticated && <>
        <p className="github-login-description">
          To start using this service authenticate using Github
        </p>
        <button className="github-login-btn btn btn-primary btn-lg" onClick={startSequence}>
          Login with Github
        </button>
      </>}
      {isAuthenticated && <button className="github-logout-btn" onClick={logout}>
        Logout
      </button>}
    </div>
  </div>);
}

export default HomePage
