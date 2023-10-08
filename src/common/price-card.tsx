import React from 'react'

const PriceCard = ({color}:any) => {
  return (
    <div className={color === 'light' ? 'price-box-white' : 'price-box-black'}>
      <div className='dash'></div>

      <h3>Everyday Benefits</h3>

      <p>WealthHat Investment </p>
      <p>banking and 65,000+ ATMs</p>
      <p>worldwide</p>

      <hr className={color==="light" ? "border-dark" : "border-light"}/>

      <p>Combined Average Monthly Balance</p>
      <div>
        <span>$0</span>
        <small> to $29,999.99 </small>
      </div>

       <hr className={color==="light" ? "border-dark" : "border-light"}/>

      <p>Features & Benefits include : </p>
      <div className=' d-flex gap-3 mt-3'>
        <i className='bi bi-check-circle-fill'></i>
        <p>
          Ways to avoid Monthly Service Fees with $250+ in Enhanced Direct
          Deposits
        </p>
      </div>
      <div className=' d-flex gap-3 mt-3'>
        <i className='bi bi-check-circle-fill'></i>
        <p>
          Ways to avoid Monthly Service Fees with $250+ in Enhanced Direct
          Deposits
        </p>
      </div>

      {color === "black" && <div className=' d-flex gap-3 mt-3'>
        <i className='bi bi-check-circle-fill'></i>
        <p>
          No Overdraft or Returned
Item Fees
        </p>
      </div>}

      <button>Open an Account</button>
    </div>
  );
}

export default PriceCard