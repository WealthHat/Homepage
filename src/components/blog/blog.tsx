import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3 p-0'>
            <div className='blog-card'>
              <div className='blog-image'>
                <Image
                  src='/images/blog1.svg'
                  alt=''
                  width={100}
                  height={100}
                />
                <div className="tag">Financial planning</div>
              </div>
              <div className='blog-content'>
                <h1>How inflation affects your investments</h1>
                <p>22 AUGUST, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog