import { useRouter } from 'next/router'
import React from 'react'
import { Commits } from '../../../../../src/github/Commits'
import { useAuthContext } from '../../../../../src/auth/AuthContextProvider'
import Page from '../../../../../src/layout/Page'
import Section from '../../../../../src/layout/Section'

function RepoPage () {

  const { isAuthenticated } = useAuthContext()
  const router = useRouter()
  const { org, repo, age_days } = router.query

  return (<Page>
    <Section>
      <h1 className="h3">{org}/{repo} commits within {age_days} days</h1>
      {isAuthenticated && <Commits org={org} repo={repo} ageDays={age_days}/>}
    </Section>
  </Page>)
}

export default RepoPage
