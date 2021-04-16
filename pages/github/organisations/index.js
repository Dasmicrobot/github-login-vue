import Link from 'next/link'
import { useAuthContext } from '../../../src/auth/AuthContextProvider'
import { Organisations } from '../../../src/github/Organisations'
import Page from '../../../src/layout/Page'

function OrganisationsPage () {

  const { isAuthenticated } = useAuthContext()

  return (<Page>
    <div className="container">
      <div className="row align-items-center h-100">
        <main className="col-md-6 offset-md-3">
          <h1 className="h3">Your organisations</h1>
          <p>Select an available organisation to begin filtering your activity</p>
          {isAuthenticated && <Organisations/>}
        </main>
      </div>
    </div>
  </Page>)
}

export default OrganisationsPage
