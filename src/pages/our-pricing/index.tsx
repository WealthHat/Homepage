import React from 'react';
import Layout from '@/components/Layout';
import PriceCard from '@/common/price-card';
import HeroSection from '@/common/hero-section/hero-section';
import MetaTags from '@/components/meta-tags';

const OurPricing = () => {
  //
  return (
    <Layout>
      <MetaTags title='Our Pricing' description='Our Pricing ' />
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
