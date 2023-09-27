import React from 'react';
import Heading from '../heading/heading';
import CircleArrow from '@/svgs/circle-arrow';

const Firm = () => {
  return (
    <div className='firm'>
      <Heading title='The firm' subtitle='Delivering for Investors' />

      <div className='container firm-center'>
        <div className='row'>
          <div className='col-6 left-firm'>
            <h2>Unmatched scale</h2>
            <p>
              WealthHat is the world’s largest alternative asset manager, with
              $1 trillion in AUM. We serve institutional and individual
              investors by building strong businesses that deliver lasting
              value. Our scale – with more than 12,600 real estate assets* and
              230+ portfolio companies enables us to invest in dynamic sectors
              positioned for long-term growth.
            </p>

            <div className='readmore'>
              <span>Read more</span>
              <CircleArrow />
            </div>
          </div>
          <div className='col-6 right-firm'>
            <div>
              <h1>$100M</h1>
              <h2>Assets Under Management</h2>
              <p>
                All figures as of June 30, 2023, unless otherwise indicated. *As
                of March 31, 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firm;
