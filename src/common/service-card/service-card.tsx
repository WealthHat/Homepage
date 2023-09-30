import React from 'react'

type CardType = {
    title:string,
    content:string,
    color:string
}

const ServiceCard = ({title, content, color}:CardType) => {
  return (
    <div
      className='services-card'
      style={{
        background: color === 'light' ? 'white' : 'black',
        color: color === 'light' ? 'black' : 'white',
      }}
    >
      <h2
        style={{
          color: color === 'light' ? 'black' : 'white',
        }}
      >
        {title}
      </h2>
      <p>{content}</p>

      <small>Read More</small>
    </div>
  );
}

export default ServiceCard