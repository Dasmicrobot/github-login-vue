import Page from '../../src/layout/Page'
import Section from '../../src/layout/Section'
import Link from 'next/link'

const ContentPages = (props) => {
  return (
    <Page>
      <Section>
        <h1 className="h2">Available pages</h1>
        <div className="card">
          <ul className="list-group list-group-flush">
            {props.pages.map(item => <li key={item.title} className="list-group-item">
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>)}
          </ul>
        </div>
      </Section>
    </Page>
  )
}

export default ContentPages

export async function getStaticProps(context) {

  // TODO replace with require.context()
  return {
    props: {
      pages: [
        { link: 'content/about', title: 'About' },
        { link: 'content/cookies', title: 'Cookie policy' },
        { link: 'content/github-org-missing', title: 'Github organisation missing' },
        { link: 'content/github-repo-missing', title: 'Github repository missing' },
        { link: 'content/privacy', title: 'Privacy policy' },
        { link: 'content/terms', title: 'Terms of use' },
      ]
    }
  }
}
