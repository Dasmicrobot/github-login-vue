import Link from 'next/link'
import { useAuthContext } from '../src/auth/AuthContextProvider'
import Page from '../src/layout/Page'

function HomePage () {

  const { isAuthenticated, loginWithRedirect, logout } = useAuthContext()

  return (<Page>
    <div className="d-flex flex-grow-1 align-items-center justify-content-center flex-column">
      { !isAuthenticated && <div className="text-center">
        <p className="lead">Login and check your commits throughout your Github organisation 📈</p>
        <button className="btn btn-primary btn-lg" onClick={loginWithRedirect}>Login with Github</button>
      </div> }
      { isAuthenticated && <div className="text-center">
        <p className="lead">Begin by choosing your organisation</p>
        <Link href="/github/organisations"><a className="btn btn-primary btn-lg">Select organisation</a></Link>
      </div> }
    </div>
  </Page>)
}

export default HomePage
