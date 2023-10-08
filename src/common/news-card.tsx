import Arrow from '@/svgs/arrow';
import React from 'react'
import {useRouter} from 'next/router'

const NewsCard = () => {
  const router = useRouter()

  // 
  return (
    <div className='news-card'>
      <div className='news-box'>
        <p>28 Aug 2023</p>
        <h3>
          WealthHat and Creative Planning Announce Agreement to Acquire
          WealthHat Personal Financial Management Business
        </h3>
      </div>

      <div className="arrow" onClick={() => router.push("/news/1") }>
        <i className="bi bi-chevron-right"></i>
      </div>
    </div>
  );
}

export default NewsCard