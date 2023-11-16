import Logo from '@/svgs/logo';
import Link from 'next/link';
import React from 'react';
import FooterIcons from './footer-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 footer-left'>
            <div className='logo-section'>
              <Logo />
            </div>

            <p className='content'>
              As a wealth advisor and fiduciary to our clients, our purpose at
              WealthHat is to help our clients achieve their financial goals and
              experience financial well-being. Our clients turn to us for the
              solutions they need when planning for their most important
              personal goals as well as family goals.
            </p>

            <p className='content'>
              WealthHat Advisory Limited is a SEC-registered Corporate
              Investment Advisor. WealthHat is a trademark of WealthHat Advisory
              Limited.
            </p>
          </div>

          <div className='col-lg-6 col-md-6 footer-right'>
            <div className='logo-section non-visible'>
              <Logo />
            </div>

            <div className='row'>
              <div className='footer-box col-xl-3 col-lg-3 col-md-12 '>
                <ul>
                  <li className='list-heading'>Company</li>
                  <li className='schedule'>
                    <Link href='/'>About</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Our client</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Our process</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Our pricing</Link>
                  </li>
                </ul>
              </div>

              <div className='footer-box col-xl-6 col-lg-6 col-md-12 '>
                <ul>
                  <li className='list-heading'> Who We Serve</li>

                  <li className='schedule'>
                    <Link href='/'>
                      Ultra High Net Worth & High Net Worth Individuals
                    </Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Beneficiaries & Heirs</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Families & Spouses</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Entrepreneurs & Founders</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Families & Family Businesses</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Senior Executives</Link>
                  </li>
                </ul>
              </div>

              <div className='footer-box col-xl-3 col-lg-3 col-md-12'>
                <ul>
                  <li className='list-heading'>Insights</li>
                  <li className='schedule'>
                    <Link href='/'>Articles</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>Webinars</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/'>News & Events</Link>
                  </li>
                </ul>
              </div>
            </div>

            <FooterIcons />
          </div>
        </div>

        <div className='copyrights'>
          <small>© 2023 WealthHat Advisory Limited.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
