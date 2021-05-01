import React from 'react'
import Page from '../../src/layout/Page'
import Section from '../../src/layout/Section'
import Link from 'next/link'

export const title = 'Github repository missing'

const GithubRepoMissing = () => {
  return (
    <Page>
      <Section>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/content">Content</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1 className="h2">{title}</h1>
        <p>TODO</p>
      </Section>
    </Page>
  )
}

export default GithubRepoMissing
