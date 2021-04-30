import React from 'react'
import Page from '../../src/layout/Page'
import Section from '../../src/layout/Section'
import Link from 'next/link'

const GithubOrgMissing = () => {
  return (
    <Page>
      <Section>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/content">Content</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Github organisation missing</li>
          </ol>
        </nav>
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
