import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container-fluid p-3 p-md-5">
        <ul className="nav mb-3 justify-content-center">
          <li className="nav-item">
            <Link href='/content/terms'>
              <a className="nav-link">Term of use</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href='/content/about'>
              <a className="nav-link">About Us</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href='/content/cookies'>
              <a className="nav-link">Cookies</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href='/content/privacy'>
              <a className="nav-link">Privacy</a>
            </Link>
          </li>
        </ul>
        <p className="text-center">Dasmicrobot Limited © 2019. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
