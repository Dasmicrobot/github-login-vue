import React from 'react'
import Link from 'next/link';
import styles from '../footer/footer';


function Footer() {
  return (

    <>
      <ul className={styles.footer}>
        <li >
          <Link href='/TermOfUse'>
            Term of use
          </Link>
        </li>
        <li >
          <Link href='/About'>
            About Us
          </Link>
        </li>
        <li >
          <Link href='/Cookies'>
            Cookies
          </Link>
        </li>
        <li >
          <Link href='/Privacy'>
            Privacy
          </Link>
        </li>
      </ul>
      <div className='styles.copyright'>
        <p class='copyright'>Git Activity © 2021</p>
      </div>
    </>
  )
}
export default Footer
