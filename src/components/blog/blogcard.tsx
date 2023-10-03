import Image from 'next/image';
import React from 'react'

const BlogCard = () => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>

    <div className='blog-card'>
      <div className='blog-image'>
        <Image src='/images/blog1.svg' alt='' width={100} height={100} />
        <div className='tag'>Financial planning</div>
      </div>
      <div className='blog-content'>
        <h1 className="blog-heading">How inflation affects your investments</h1>
        <p>22 AUGUST, 2023</p>
      </div>
    </div>  
    </div>
  );
}

export default BlogCard