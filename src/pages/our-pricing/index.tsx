import React from 'react';
import Layout from '@/components/Layout';
import PriceCard from '@/common/price-card';


const OurPricing = () => {

  // 
  return (
    <Layout>
      <div className='our-pricing'>
        <div className='pricing-hero'>
          <div className='container-fluid'>
            <h1>Our Pricing</h1>
            <p>
              Private Wealth Solutions’ mission is to deliver innovative
              solutions with exceptional service to advisors and their clients.
              We are committed to helping more investors unlock differentiated
              opportunities beyond traditional asset classes.
            </p>
          </div>
        </div>

        <div className='price'>
          <div className='container'>
            <div className='row'>
              <div className="col-3">

              <PriceCard color="light"/>
              </div>
              <div className="col-3">

              <PriceCard color="light"/>
              </div>

              <div className="col-3">

              <PriceCard color="black"/>
              </div>
              <div className="col-3">

              <PriceCard color="black"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurPricing;