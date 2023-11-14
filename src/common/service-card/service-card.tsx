import React from 'react';

type CardType = {
  title: string;
  content: string;
  color: string;
};

const ServiceCard = ({ title, content, color }: CardType) => {
  return (
    <div
      className='services-card'
      style={{
        background: color === 'light' ? 'white' : 'black',
        color: color === 'light' ? 'black' : 'white',
        boxShadow:
          color === 'light'
            ? '0px 16px 50px 0px rgba(171, 168, 168, 0.25)'
            : '',
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

      <small>Read More</small>
    </div>
  );
};

export default ServiceCard;
