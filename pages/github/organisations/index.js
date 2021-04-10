import { useAuthContext } from '../../../src/auth/AuthContextProvider'
import { Organisations } from '../../../src/github/Organisations'
import Page from '../../../src/layout/Page'

function OrganisationsPage () {

  const { isAuthenticated } = useAuthContext()

  return (<Page>
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {isAuthenticated && <Organisations/>}
        </main>
      </div>
    </div>
  </Page>)
}

export default OrganisationsPage
