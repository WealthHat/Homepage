import { useRouter } from 'next/router'
import React from 'react'

const GoBack = () => {
    const router = useRouter()

    // 
  return (
    <div style={{cursor:'pointer'}} onClick={()=> router.back()}>
      <i className='bi bi-arrow-left' style={{fontSize:'22px', marginRight:"10px"}}></i>
    </div>
  );
}

export default GoBack