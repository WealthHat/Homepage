import React from 'react'
import Heading from '../heading/heading';

const Services = () => {
  return (
    <div className='services'>
      <Heading
        title='Our services'
        subtitle='Delivering for Investors'
        content='WealthHat is the world’s largest alternative asset manager, with $1 trillion. We serve institutional and individual investors by building strong businesses '
      />
      <div className='container services-center'>
        <div className="row">
            <div className="col-6 bg-danger">left</div>
            <div className="col-6 bg-primary">right</div>

        </div>
      </div>
    </div>
  );
}

export default Services