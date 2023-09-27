import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid bg-success'>
      <div className='row'>
        <div className='col-5 left'>
          <div className='container'>
            <div className='row'>
              <div className='col bg-primary'>col</div>
            </div>
          </div>
        </div>

        <div className='col-7 right'>right</div>
      </div>
    </div>
  );
}

export default Hero