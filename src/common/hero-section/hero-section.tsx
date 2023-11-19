import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  content?: string;
  image: any;
  showbutton?: boolean;
}

const HeroSection = (props: Props) => {
  return (
    <div className='hero-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-7 hero-left'>
            <div className='hero-left-box'>
              <h1>{props.title}</h1>
              <p>{props.content}</p>
              {props.showbutton && <button>Schedule a call</button>}
            </div>
          </div>

          <div className='col-5 hero-right'>
            <div className='hero-image'>
              <Image src={props.image} alt='' width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
