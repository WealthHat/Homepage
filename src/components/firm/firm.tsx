import React from 'react';
import Heading from '../heading/heading';
import CircleArrow from '@/svgs/circle-arrow';

const Firm = () => {
  return (
    <div className='firm'>
      <Heading title='The firm' subtitle='Fiduciary. Expertise. Trust' />

      <div className='container firm-center'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 left-firm'>
            <h2>Growing and Preserving Wealth</h2>
            <p>
              WealthHat is a leading wealth advisory and financial planning
              firm, with $100M+ in Assets under Advisement (AuA). With our
              unwavering commitment to precision and purpose, we specialize in
              offering comprehensive wealth advisory & financial planning
              services to high net-worth individuals, families, and businesses.
              Our extensive expertise allows us to serve our clients with utmost
              conviction.
            </p>

            <div className='readmore'>
              <span>Read more</span>
              <CircleArrow />
            </div>
          </div>

          <div className='col-lg-6 col-md-6 right-firm'>
            <div>
              <h1>$100M</h1>
              <h2>Assets Under Management</h2>
              <p>
                All figures as of June 30, 2023, unless otherwise indicated.{' '}
                <br /> *As of March 31, 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firm;
