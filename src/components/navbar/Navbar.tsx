import Logo from '@/svgs/logo';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav" style={{background:"black"}}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='nav-left'>
              <Logo/>
            </div>
          </div>

          <div className='col-6'>
            <div className='nav-right'>
              <ul>
                <li>The Firm</li>
                <li>What we do</li>
                <li>Insights</li>
                <li>Client access</li>
                <li>Schedule a call</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar