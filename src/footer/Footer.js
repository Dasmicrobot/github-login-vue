import React from 'react'
import Link from 'next/link';
//import styles from '../footer/footer.css'


function Footer() {
  return (

    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#4b4c4d',
      color: 'white',
      textAlign: 'center'


      }}
      className='styles.footer'>
      <ul className='styles.footer.ul'>
        <li className='styles.footer.li'>
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
    </div>
  )
}
export default Footer
