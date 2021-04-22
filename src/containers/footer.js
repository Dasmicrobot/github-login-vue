import React from 'react'
import Footer from '../components/footer'
import Link from 'next/link';

export function FooterContainer(){
  return(
    <Footer>
        <Footer.Wrapper>
          <Footer.Row>

            <Footer.Column>
              <Footer.Title>Company</Footer.Title>
              <Footer.Link href='../About'>About Us</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Title>Legal</Footer.Title>
              <Footer.Link href="../TermOfUse">Our Terms of Use</Footer.Link>
              <Footer.Link href="../Privacy">Our Privacy Policy</Footer.Link>
              <Footer.Link href="../Cookies">Cookies</Footer.Link>
            </Footer.Column>

          </Footer.Row>
        </Footer.Wrapper>
    </Footer>
  )
}
