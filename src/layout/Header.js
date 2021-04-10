import Link from 'next/link'

function Header () {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link href="/">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          Git Activity
        </a>
      </Link>
    </header>
  )
}

export default Header
