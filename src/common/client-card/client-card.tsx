import React from 'react'

type CardType = {
    title:string,
    content:string,
    color:string
}

const ClientCard = ({title, content, color}:CardType) => {
  return (
    <div
      className='client-card'
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

export default ClientCard