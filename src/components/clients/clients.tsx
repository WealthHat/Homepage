import React from 'react';
import Heading from '../heading/heading';
import ClientCard from '@/common/client-card/client-card';

const Client = () => {
  return (
    <div className='client'>
      <Heading
        title='Our client'
        content='WealthHat understands that our clients are a diverse group with unique financial needs. That’s why we take the time to carefully outline our client segments, ensuring that our services cater to their individuals requirements.'
      />
      <div className='container client-center'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 client-box'>
            <ClientCard
              title='High Net Worth & Ultra High Net Individuals'
              content='"Tailored wealth management solutions designed specifically for individuals and families with significant assets. We understand the unique challenges and opportunities that come with substantial wealth and provide strategies to preserve and grow your assets."'
              color='light'
            />
          </div>

          <div className='col-lg-4 col-md-6 client-box'>
            <ClientCard
              title='Beneficiaries & Heirs'
              content='"Guidance and support to beneficiaries and heirs to ensure seamless transition and continuation of wealth. Our experts help navigate the complexities of inheritance, trusts, and legacy planning."'
              color='dark'
            />
          </div>

          <div className='col-lg-4 col-md-6 order-md-1 client-box'>
            <ClientCard
              title='Families & Spouses'
              content={`"Comprehensive financial planning that considers the needs of every family member. From joint investments to educational trusts, we make sure your family's financial well-being is secured"`}
              color='light'
            />
          </div>

          <div className='col-lg-4 col-md-6  order-md-1 client-box'>
            <ClientCard
              title='Families & Family Businesses'
              content='"Expertise in aligning family values with business goals. We offer strategies for succession planning, risk management, and growth to ensure your family business thrives for generations."'
              color='dark'
            />
          </div>

          <div className='col-lg-4 col-md-6 order-md-2 client-box'>
            <ClientCard
              title='Entrepreneurs & Founders'
              content='"Dedicated support for business leaders, from startup phase to exit strategy. Our financial advisors help entrepreneurs optimize their personal and business wealth for maximum impact."'
              color='light'
            />
          </div>

          <div className='col-lg-4 col-md-6 order-md-2 client-box'>
            <ClientCard
              title='Senior Executives'
              content='"Customized financial planning for top-tier professionals. Our services address the unique needs of senior executives, from stock option planning to retirement strategies."'
              color='dark'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
