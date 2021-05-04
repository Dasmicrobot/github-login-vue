import React from 'react'
import Link from 'next/link';



function Footer() {
  return (

    <div>

      <div className="footer">
        <ul className='footer.ul'>
          <li className='list'>
            <Link href='/TermOfUse'>
              <a className='Link'>Term of use</a>
            </Link>
          </li>
          <li className='list'>
            <Link href='/About'>
              <a className='Link'>About Us</a>
            </Link>
          </li>
          <li className='list'>
            <Link href='/Cookies'>
              <a className='Link'>Cookies</a>
            </Link>
          </li>
          <li className='list'>
            <Link href='/Privacy'>
              <a className='Link'>Privacy</a>
            </Link>
          </li>
        </ul>
        <div className='copyright'>
          <p class='copyright'>Git Activity &copy; 2021</p>
        </div>

      </div>
      <style jsx>
        {`
          .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #4b4c4d;
            color: white;
            height: 150px;
          }
          .Link{
            text-decoration: none;
            color: white;
            font-size: 20px;
            padding: 20px;
          }
          .copyright{
            position: absolute;
            width: 100%;
            color: white;
            line-height:40px;
            font-size:0.7em;
            text-align:center;
            bottom:0;
            text-shadow: 0 1px rgba(255, 255, 255, 0.1);
          }
          .list{
            float: left;
            text-decoration: none;
            padding: 5px;
            list-style-type: none;
          }
        `}
        </style>

    </div>
  );
}
export default Footer
