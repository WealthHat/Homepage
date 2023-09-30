import React from 'react';
import Heading from '../heading/heading';
import ClientCard from '@/common/client-card/client-card';

const Client = () => {
  return (
    <div className='client'>
      <Heading
        title='Our client'
        subtitle='Delivering for Investors'
        content='WealthHat is the world’s largest alternative asset manager, with $1 trillion. We serve institutional and individual investors by building strong businesses '
      />
      <div className='container p-0 client-center'>
        <div className='row'>
          <div className='col-4 client-box'>
            <ClientCard
              title='One Time Financial & Investment Plan'
              content='We serve institutional and individual investors by building strong
        businesses that deliver lasting value. We serve them through a global
        network powered by partnership, integrity, We serve them through a
        global network powered by partnership, integrity.'
              color='light'
            />
          </div>

          <div className='col-4 client-box'>
            <ClientCard
              title='Premium Wealth Retainer'
              content='We serve institutional and individual investors by building strong
        businesses that deliver lasting value. We serve them through a global
        network powered by partnership, integrity, We serve them through a
        global network powered by partnership, integrity.'
              color='dark'
            />
          </div>

          <div className='col-4 client-box'>
            <ClientCard
              title='One Time Financial & Investment Plan'
              content='We serve institutional and individual investors by building strong
        businesses that deliver lasting value. We serve them through a global
        network powered by partnership, integrity, We serve them through a
        global network powered by partnership, integrity.'
              color='light'
            />
          </div>

          <div className='col-4 client-box'>
            <ClientCard
              title='Premium Wealth Retainer'
              content='We serve institutional and individual investors by building strong
        businesses that deliver lasting value. We serve them through a global
        network powered by partnership, integrity, We serve them through a
        global network powered by partnership, integrity.'
              color='dark'
            />
          </div>

          <div className='col-4 client-box'>
            <ClientCard
              title='One Time Financial & Investment Plan'
              content='We serve institutional and individual investors by building strong
        businesses that deliver lasting value. We serve them through a global
        network powered by partnership, integrity, We serve them through a
        global network powered by partnership, integrity.'
              color='light'
            />
          </div>

          <div className='col-4 client-box'>
            <ClientCard
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

export default Client;
