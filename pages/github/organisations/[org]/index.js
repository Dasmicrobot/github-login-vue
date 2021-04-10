import { useRouter } from 'next/router'
import Page from '../../../../src/layout/Page'
import { Repositories } from '../../../../src/github/Repositories'

function OrganisationPage () {

  const router = useRouter()
  const { org } = router.query

  return (<Page>
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          Selected org:{org}

          <Repositories org={org} />
        </main>
      </div>
    </div>
  </Page>)
}

export default OrganisationPage
