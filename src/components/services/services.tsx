import React from 'react';
import Heading from '../heading/heading';
import ServiceCard from '@/common/service-card/service-card';

const Services = () => {
  return (
    <div className='services'>
      <Heading
        title='Our services'
        subtitle='Delivering for Investors'
        content='WealthHat is the world’s largest alternative asset manager, with $1 trillion. We serve institutional and individual investors by building strong businesses '
      />
      <div className='container services-center'>
        <div className='row'>
          <div className='col-6 services-left'>
            <ServiceCard
              title='One Time Financial & Investment Plan'
              content='We serve institutional and individual investors by building strong
        businesses that deliver lasting value. We serve them through a global
        network powered by partnership, integrity, We serve them through a
        global network powered by partnership, integrity.'
              color='light'
            />
          </div>

          <div className='col-6 services-right'>
            <ServiceCard
              title='Premium Wealth Retainer'
              content='We serve institutional and individual investors by building strong
        businesses that deliver lasting value. We serve them through a global
        network powered by partnership, integrity, We serve them through a
        global network powered by partnership, integrity.'
              color='dark'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
