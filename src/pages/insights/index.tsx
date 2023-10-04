import Layout from '@/components/Layout';
import BlogCard from '@/components/blog/blogcard';
import MetaTags from '@/components/meta-tags';
import Subscribe from '@/components/subscribe/subscribe';
import Filter from '@/svgs/filter';
import React from 'react';

const Insights = () => {
  return (
    <Layout>
      <MetaTags title='Insights' description='Insights' />

      <div className='insights'>
        <div className='insight-hero'>
          <div className='insight-heading'>
            <h1>Insights</h1>
            {/* <div className="dash"></div> */}
          </div>
          <p>
            Read some of our perspectives into the key issues for you and your
            wealth.
          </p>
        </div>

        <div className='container filter'>
          <div className='filter-box'>
            Filter By Topics
            <Filter />
          </div>
        </div>

        <div className='container blogs'>
          <div className='row'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>

        <Subscribe/>
      </div>
    </Layout>
  );
};

export default Insights;
