import Image from 'next/image';
import React from 'react'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div>
          <h1>
            Wealth Advisors to successful Individuals, Families & Businesses
          </h1>
          <p>
            Our clients always come first. We serve them through a global
            network powered by partnership, integrity, advancing economy.
          </p>
        </div>
      </div>

      <div className='hero-right'>
        <Image src='/images/hero-image.svg' alt='' width={100} height={100} />
      </div>
    </div>
  );
}

export default Hero