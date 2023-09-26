import Logo from '@/svgs/logo';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav' style={{ background: 'black' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <div className='nav-left'>
              <Logo />
            </div>
          </div>

          <div className='col-7'>
            <div className='nav-right'>
              <ul>
                <li>
                  <Link href='/'>The Firm</Link>
                  <i className='bi bi-chevron-down'></i>
                </li>
                <li>
                  <Link href='/'>What we do</Link>
                  <i className='bi bi-chevron-down'></i>
                </li>
                <li>
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar