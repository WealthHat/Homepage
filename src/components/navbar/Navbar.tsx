import React, {useState} from 'react';
import Logo from '@/svgs/logo';
import Link from 'next/link';
import Image from 'next/image';
import ClientAccess from '@/common/client-access/client-access';
import { Modal } from 'react-bootstrap';

const Navbar = () => {
  const [navOne, setNavOne] = useState(false)
  const [navTwo, setNavTwo] = useState(false)
  const [navThree, setNavThree] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [openModal, setOpenModal] = useState(false)

// 
  return (
    <div className='nav'>
      <nav
        className='nav'
        style={{ background: 'black' }}
        onMouseLeave={() => {
          setNavOne(false), setNavTwo(false), setNavThree(false);
        }}
      >
        <div className='nav-left'>
          <Image
            src='/images/logo.svg'
            alt='brand-logo'
            width={100}
            height={100}
          />
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
            <li onMouseEnter={() => {
                setNavTwo(false), setNavOne(false), setNavThree(false);
              }}>
              <Link href='/'>Client access</Link>
            </li>
            <li onMouseEnter={() => {
                setNavTwo(false), setNavOne(false), setNavThree(false);
              }} className='schedule'>
              <Link href='/'>Schedule a call</Link>
            </li>
          </ul>

          {!showNav ? (
            <div className='nav-menu' onClick={() => setShowNav(true)}>
              <i className='bi bi-list'></i>
            </div>
          ) : (
            <div className='nav-menu' onClick={() => setShowNav(false)}>
              <i className='bi bi-x-lg'></i>
            </div>
          )}
        </div>

        <div className='container'>
          {navOne ? (
            <div className='row  dropdown'>
              <div className='line'></div>

              <div className='col p-0'>
                <ol>
                  <li className='schedule'>
                    <Link href='/about-us'>About WealthHat</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/our-clients'>Our client</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/our-process'>Our process</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/our-pricing'>Our pricing</Link>
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
                    <Link href='/one-time-advice'>One-Time Advice</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/ongoing-advisory'>Ongoing Advisory</Link>
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
                    <Link href='/insights'>Articles</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/webinar'>Webinars</Link>
                  </li>
                  <li className='schedule'>
                    <Link href='/news'>News & Events</Link>
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
              onClick={() => setShowNav(false)}
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
              onClick={() => setShowNav(false)}
              id='flush-collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='d-flex'>
                <div className='drop-left'>
                  <div className='accordion-body fw-bolder'>What We Do</div>
                  <div className='accordion-body'>
                    <Link href=''>One-time Advice</Link>
                  </div>
                  <div className='accordion-body'>
                    <Link href=''>Ongoing Advisory</Link>
                  </div>
                </div>

                <div className='drop-right'>
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
              onClick={() => setShowNav(false)}
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

          <li onClick={() => setShowNav(false)} className='accordion-item'>
            <button className='accordion-button collapsed'>
              Client Access
            </button>
          </li>

          <li onClick={() => setShowNav(false)} className='accordion-item'>
            <button className='accordion-button collapsed'>
              Schedule a call
            </button>
          </li>
        </ul>
      </div>

{/* client access modal section */}
      {/* <Modal
        show={openModal}
        onHide={() => setOpenModal(false)}
        dialogClassName='client-access-modal'
      >
        <ClientAccess/>
      </Modal> */}
    </div>
  );
};

export default Navbar;
