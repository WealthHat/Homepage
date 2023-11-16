import React from 'react';
import Layout from '@/components/Layout';
import PriceCard from '@/common/price-card';
import HeroSection from '@/common/hero-section/hero-section';

const OurPricing = () => {
  //
  return (
    <Layout>
      <div className='our-pricing'>
        <HeroSection
          title='Our Pricing'
          content='Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth.'
          image='/images/about-hero.svg'
          showbutton={true}
        />

        <div className='price'>
          <div className='container'>
            <div className='row'>
              <div className='col-3'>
                <PriceCard color='light' />
              </div>
              <div className='col-3'>
                <PriceCard color='light' />
              </div>

              <div className='col-3'>
                <PriceCard color='black' />
              </div>
              <div className='col-3'>
                <PriceCard color='black' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurPricing;
