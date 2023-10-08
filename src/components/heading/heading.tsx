import React from 'react'

type Interface = {
    title?:string,
    subtitle?:string,
    content?:string
}

const Heading = ({title, subtitle, content} : Interface) => {
  return (
    <div className='heading'>
      <div className='dash'></div>
      <small>{title}</small>
      <h1>{subtitle}</h1>
      <p>
        {content}
      </p>
    </div>
  );
}

export default Heading