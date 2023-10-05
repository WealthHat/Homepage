import Layout from '@/components/Layout';
import Marker from '@/svgs/marker';
import React from 'react';

const AboutUs = () => {
  return (
    <Layout>
      <div className='about-us'>
        <div className='about-hero'>
          <div className='container-fluid'>
            <h1>About Us</h1>
            <p>
              Private Wealth Solutions’ mission is to deliver innovative
              solutions with exceptional service to advisors and their clients.
              We are committed to helping more investors unlock differentiated
              opportunities beyond traditional asset classes.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
