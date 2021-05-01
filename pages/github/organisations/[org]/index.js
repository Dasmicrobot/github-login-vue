import { useRouter } from 'next/router'
import Page from '../../../../src/layout/Page'
import { Repositories } from '../../../../src/github/Repositories'
import { useAuthContext } from '../../../../src/auth/AuthContextProvider'

function OrganisationPage () {

  const { isAuthenticated } = useAuthContext()
  const router = useRouter()
  const { org } = router.query

  return (<Page>
    <div className="container">
      <div className="row align-items-center h-100">
        <main className="col-md-6 offset-md-3">
          <h1 className="h3">Organisation repositories</h1>
          <p>Repositories belonging to {org} organisation</p>
          {isAuthenticated && <Repositories org={org} />}
        </main>
      </div>
    </div>
  </Page>)
}

export default OrganisationPage
