import { useAuthContext } from '../../../src/auth/AuthContextProvider'
import { Organisations } from '../../../src/github/Organisations'
import Page from '../../../src/layout/Page'
import Section from '../../../src/layout/Section'
import React from 'react'

function OrganisationsPage () {

  const { isAuthenticated } = useAuthContext()

  return (<Page>
    <Section>
      <h1 className="h3">Your organisations</h1>
      <p>Select an available organisation to begin filtering your activity</p>
      {isAuthenticated && <Organisations/>}
    </Section>
  </Page>)
}

export default OrganisationsPage
