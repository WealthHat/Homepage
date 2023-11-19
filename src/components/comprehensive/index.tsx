import ServiceCard from '@/common/service-card/service-card';
import React from 'react';

interface Props {
  title: string;
  subtitle: string;
}

const Comprehensive = (props: Props) => {
  return (
    <div className='container comprehensive'>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>

      <div className='comprehensive-center'>
        <div className='row'>
          <div className='col-lg-6 col-12 comprehensive-left'>
            <ServiceCard
              title='One-Time Customised Plan'
              content='We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support.'
              color='light'
              more={true}
            />
          </div>

          <div className='col-lg-6 col-12 comprehensive-right'>
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

export default Comprehensive;
