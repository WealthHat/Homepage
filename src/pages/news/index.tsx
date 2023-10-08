import NewsCard from '@/common/news-card';
import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import Marker from '@/svgs/marker';
import Image from 'next/image';
import React from 'react';

const News = () => {
  return (
    <Layout>
      <MetaTags  title="News and Events" description="News and Events"/>
      <div className='news'>
        <div className='news-hero'>
          <div className='container-fluid'>
            <h1>News & Events</h1>
            <p>See Our Latest News and Media Releases</p>
          </div>
        </div>

        <div className="container news-body">
          <div className="heading">
            <h2>All News</h2>
            <select className="form-select">
              <option value="">All year</option>
              <option value="">Monthly</option>
              <option value="">Weekly</option>
            </select>
          </div>

         <NewsCard/>
         <NewsCard/>
         <NewsCard/>
         <NewsCard/>
         <NewsCard/>

        </div>
      </div>
    </Layout>
  );
};

export default News;
