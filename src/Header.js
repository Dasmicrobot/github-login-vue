import Link from 'next/link'

const Header = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>
          Git Activity
        </h1>
      </div>
      <Link href='/'><a>Home</a></Link>
      <Link href='/'><a>Login</a></Link>
      <Link href='/'><a>Logout</a></Link>

    </nav>
  );
}
export default Header;
