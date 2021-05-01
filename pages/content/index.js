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

  const requireContent = require.context('.', false, /\.js$/)
  const linksToPages = requireContent.keys()
    .filter(name => name !== './index.js')
    .reduce((memo, name) => {
      memo.push({
        link: `content/${name.replace(/\.js$/, '')}`,
        title: requireContent(name).title
      })
      return memo
    }, []);

  return {
    props: {
      pages: linksToPages
    }
  }
}
