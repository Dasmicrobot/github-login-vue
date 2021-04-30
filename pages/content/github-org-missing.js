import React from 'react'
import Page from '../../src/layout/Page'
import Section from '../../src/layout/Section'

const GithubOrgMissing = () => {
  return (
    <Page>
      <Section>
        <h1 className="h2">Github organisation missing</h1>
        <p>Double check the granted permissions
          <a href={`https://github.com/settings/connections/applications/${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}>
            in the settings page on Github
          </a>.
        </p>
      </Section>
    </Page>
  )
}

export default GithubOrgMissing
