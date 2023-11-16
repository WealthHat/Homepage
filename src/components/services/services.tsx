import React from 'react';
import Heading from '../heading/heading';
import ServiceCard from '@/common/service-card/service-card';

const Services = () => {
  return (
    <div className='services'>
      <Heading
        title='Our services'
        content='We understand the unique needs of our clients and offer custom services to help you achieve your financial goals. We provide two distinct services packages for our clients: a One-Time Customized Plan and a Premium Wealth Retainer Plan. Make the choice depending on your current situation and future goals. '
      />
      <div className='container services-center'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 services-left'>
            <ServiceCard
              title='One-Time Customised Plan'
              content='We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support.'
              color='light'
              more={true}
            />
          </div>

          <div className='col-lg-6 col-md-6 services-right'>
            <ServiceCard
              title='Premium Wealth Retainer Plan'
              content='Our Premium Wealth Retainer Plan is an ongoing advisory solution for High Net Worth Individuals, families, and business owners seeking ongoing wealth advisory and financial planning. It offers personalized strategies for investment management, tax planning, and insurance advisory and more, all backed by our team of seasoned advisors.'
              color='dark'
              more={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
