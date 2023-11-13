import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  content?: string;
  image: any;
}

const HeroSection = (props: Props) => {
  return (
    <div className='container-fluid hero-section'>
      <div className='row'>
        <div className='col-6 hero-left'>
          <div className='hero-left-box'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button>Schedule a call</button>
          </div>
        </div>

        <div className='col-6 hero-right'>
          <div className='hero-image'>
            <Image src={props.image} alt='' width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
