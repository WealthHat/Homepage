import React, {useState} from 'react';
import Logo from '@/svgs/logo';
import Link from 'next/link';

const Navbar = () => {
  const [navOne, setNavOne] = useState(false)
  const [navTwo, setNavTwo] = useState(false)
  const [navThree, setNavThree] = useState(false)
  const [showNav, setShowNav] = useState(false)


  return (
    <>
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

          <div className='nav-menu' onClick={() => setShowNav(!showNav)}>
            <i className='bi bi-list'></i>
          </div>
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

      {/* nav bar for mobile devices */}
      <div className={`nav-mobile ${showNav ? 'show-nav' : ''} `}>
        <ul className='accordion accordion-flush' id='accordionFlushExample'>
          <li className='accordion-item'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
            >
              The Firm
              <i className='bi bi-chevron-down'></i>
            </button>

            <div
              id='flush-collapseOne'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                <Link href=''>About WealthHat</Link>
              </div>
              <div className='accordion-body'>
                <Link href=''>Our Client</Link>
              </div>
              <div className='accordion-body'>
                <Link href=''>Our Process</Link>
              </div>
              <div className='accordion-body'>
                <Link href=''>Our Pricing</Link>
              </div>
            </div>
          </li>

          <li className='accordion-item'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo'
            >
              What we do
              <i className='bi bi-chevron-down'></i>
            </button>

            <div
              id='flush-collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='d-flex'>
                <div>
                  <div className='accordion-body fw-bolder'>What We Do</div>
                  <div className='accordion-body'>
                    <Link href=''>One-time Advice</Link>
                  </div>
                  <div className='accordion-body'>
                    <Link href=''>Ongoing Advisory</Link>
                  </div>
                </div>

                <div>
                  <div className='accordion-body fw-bolder'>Who We Serve</div>
                  <div className='accordion-body'>
                    <Link href=''>
                      Ultra High Net Worth & High Net Worth Individuals
                    </Link>
                  </div>
                  <div className='accordion-body'>
                    <Link href=''>Beneficiaries & Heirs</Link>
                  </div>
                  <div className='accordion-body'>
                    <Link href=''>Families & Spouses</Link>
                  </div>
                  <div className='accordion-body'>
                    <Link href=''>Entrepreneurs & Founders</Link>
                  </div>
                  <div className='accordion-body'>
                    <Link href=''>Families & Family Businesses</Link>
                  </div>
                  <div className='accordion-body'>
                    <Link href=''>Senior Executives</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className='accordion-item'>
            <button
              className='accordion-button collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseThree'
            >
              Insights
              <i className='bi bi-chevron-down'></i>
            </button>

            <div
              id='flush-collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                <Link href=''>Articles</Link>
              </div>
              <div className='accordion-body'>
                <Link href=''>Webinars</Link>
              </div>
              <div className='accordion-body'>
                <Link href=''>News & Events</Link>
              </div>
            </div>
          </li>

          <li className='accordion-item'>
            <button className='accordion-button collapsed'>
              Client Access
            </button>
          </li>

          <li className='accordion-item'>
            <button className='accordion-button collapsed'>
              Schedule a call
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
