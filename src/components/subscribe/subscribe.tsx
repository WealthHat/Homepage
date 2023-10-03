import React from 'react';

const Subscribe = () => {
  return (
    <div className='container subscribe'>
      <div className='row'>
        <div className='col-xl-3 col-lg-5 col-md-6'>
          <div className='form-box'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='email@email.com' />
          </div>

          <div className='row mt-3'>
            <div className='col-6 d-flex align-items-center'>
              <p>For Special offers and Regular news</p>
            </div>
            <div className='col-6 d-flex align-items-center justify-content-end'>
              <button>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
