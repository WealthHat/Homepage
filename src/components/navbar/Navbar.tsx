import React, {useState} from 'react';
import Logo from '@/svgs/logo';
import Link from 'next/link';

const Navbar = () => {
  const [navOne, setNavOne] = useState(false)
  const [navTwo, setNavTwo] = useState(false)
  const [navThree, setNavThree] = useState(false)


  return (
    <nav
      className='nav'
      style={{ background: 'black' }}
      onMouseLeave={() => {
        setNavOne(false), setNavTwo(false), setNavThree(false);
      }}
    >
      <div className='nav-left'>
        <Logo />
      </div>

      <div className='nav-right'>
        <ul>
          <li
            onMouseEnter={() => {
              setNavOne(true), setNavTwo(false), setNavThree(false);
            }}
          >
            <Link href='/'>The Firm</Link>
            <i className='bi bi-chevron-down'></i>
          </li>
          <li
            onMouseEnter={() => {
              setNavTwo(true), setNavOne(false), setNavThree(false);
            }}
          >
            <Link href='/'>What we do</Link>
            <i className='bi bi-chevron-down'></i>
          </li>
          <li
            onMouseEnter={() => {
              setNavTwo(false), setNavOne(false), setNavThree(true);
            }}
          >
            <Link href='/'>Insights</Link>
            <i className='bi bi-chevron-down'></i>
          </li>
          <li>
            <Link href='/'>Client access</Link>
          </li>
          <li className='schedule'>
            <Link href='/'>Schedule a call</Link>
          </li>
        </ul>
      </div>

      <div className='container'>
        {navOne ? (
          <div className='row  dropdown'>
            <div className='line'></div>

            <div className='col p-0'>
              <ol>
                <li className='schedule'>
                  <Link href='/'>About WealthHat</Link>
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
              </ol>
            </div>
          </div>
        ) : navTwo ? (
          <div className='row  dropdown'>
            <div className='line'></div>

            <div className='col-4 p-0'>
              <ol>
                <li className='schedule'>
                  <Link href='/' className='fw-bolder'>
                    What we do
                  </Link>
                </li>
                <li className='schedule'>
                  <Link href='/'>One-Time Advice</Link>
                </li>
                <li className='schedule'>
                  <Link href='/'>Ongoing Advisory</Link>
                </li>
              </ol>
            </div>

            <div className='col-4 p-0'>
              <ol>
                <li className='schedule'>
                  <Link href='/' className='fw-bolder'>
                    Who We Serve
                  </Link>
                </li>
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
              </ol>
            </div>
          </div>
        ) : navThree ? (
          <div className='row  dropdown'>
            <div className='line'></div>

            <div className='col p-0'>
              <ol>
                <li className='schedule'>
                  <Link href='/'>Articles</Link>
                </li>
                <li className='schedule'>
                  <Link href='/'>Webinars</Link>
                </li>
                <li className='schedule'>
                  <Link href='/'>News & Events</Link>
                </li>
              </ol>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
