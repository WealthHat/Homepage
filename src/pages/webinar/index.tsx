import Layout from '@/components/Layout'
import Marker from '@/svgs/marker';
import React from 'react'

const Webinar = () => {
  return (
    <Layout>
      <div className='webinars'>
        <div className='webinar-hero'>
          <div className='container-fluid'>
            <h1>
              Maximizing Returns: Unveiling Investment Strategies for Financial
              Success
            </h1>
            <p>June 19-23, 2023</p>
            <small>10.00 am - 12.00pm</small>
            <div className='status'>
              <Marker />
              Online
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Webinar