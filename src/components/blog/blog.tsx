import React from 'react';
import BlogCard from './blogcard';

const Blog = () => {
  return (
    <div className='blog'>
      <div className='container-fluid'>
        <div className='d-flex'>
          <h1 className='explore'>Explore insights</h1>
          <div className='dash'></div>
        </div>

        <div className='row'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
