import React from 'react'
import Page from '../../src/layout/Page'
import Section from '../../src/layout/Section'
import Link from 'next/link'

const Terms = () => {
  return (
    <Page>
      <Section>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/content">Content</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Terms of use</li>
          </ol>
        </nav>
        <h1 className="h2">Terms of use</h1>
      </Section>
    </Page>
  )
}

export default Terms
