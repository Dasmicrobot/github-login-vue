import Link from 'next/link'
import { useAuthContext } from '../auth/AuthContextProvider'

function Header () {
  const { isAuthenticated, loginWithRedirect, logout } = useAuthContext()
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/logo.svg" alt="Git Activity" width="60" height="30"/>
              <span className="small ml-2">Git Activity</span>
            </a>
          </Link>
          <ul className="navbar-nav ml-auto">
            { isAuthenticated && <li className="nav-item"><Link href="/github/organisations"><a className="nav-link">Your organisations</a></Link></li> }
            { isAuthenticated && <li className="nav-item"><button className="ml-4 btn btn-primary" onClick={logout}>Logout</button></li> }
            { !isAuthenticated && <li className="nav-item"><button className="btn btn-primary" onClick={loginWithRedirect}>Login with Github</button></li> }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
