import Link from 'next/link'
import { useAuthContext } from '../src/auth/AuthContextProvider'
import Page from '../src/layout/Page'

function HomePage () {

  const { isAuthenticated, loginWithRedirect, logout } = useAuthContext()

  return (<Page>
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu"
             className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse flex-grow-1">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Dashboard</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <img src="/logo.svg" alt="logo" width="200" height="100"/>
          <div className="github-login">
            {!isAuthenticated && <>
              <p className="github-login-description">
                To start using this service authenticate using Github
              </p>
              <button className="github-login-btn btn btn-primary btn-lg"
                      onClick={loginWithRedirect}>
                Login with Github
              </button>
            </>}
            {isAuthenticated && <button className="github-logout-btn" onClick={logout}>
              Logout
            </button>}
          </div>

          {isAuthenticated && <Link href="/github/organisations">Organisations</Link>}
        </main>

      </div>
    </div>
  </Page>)
}

export default HomePage
