import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <ul>
      <li>
        <Link href='/TermOfUse'>
          Term of use
        </Link>
      </li>
      <li>
        <Link href='/About'>
          About Us
        </Link>
      </li>
      <li>
        <Link href='/Cookies'>
          Cookies
        </Link>
      </li>
      <li>
        <Link href='/Privacy'>
          Privacy
        </Link>
      </li>
    </ul>
)
}
export default Footer
