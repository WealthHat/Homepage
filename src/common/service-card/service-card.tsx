import React from 'react';

type CardType = {
  title: string;
  content: string;
  color: string;
  more?: boolean;
  height?: string;
};

const ServiceCard = ({ title, content, color, more, height }: CardType) => {
  return (
    <div
      className='services-card'
      style={{
        background: color === 'light' ? 'white' : 'black',
        color: color === 'light' ? 'black' : 'white',
        border: `1px solid #e1e6ef`,
        height: height,
      }}
    >
      <h2
        style={{
          color: color === 'light' ? 'black' : 'white',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: color === 'light' ? 'black' : 'white',
          textAlign: 'left',
        }}
      >
        {content}
      </p>

      {more && <small>Read More</small>}
    </div>
  );
};

export default ServiceCard;
