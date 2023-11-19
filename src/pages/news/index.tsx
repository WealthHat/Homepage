import NewsCard from '@/common/news-card';
import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import Marker from '@/svgs/marker';
import Image from 'next/image';
import React from 'react';
import HeroSection from './../../common/hero-section/hero-section';

const News = () => {
  return (
    <Layout>
      <MetaTags title='News and Events' description='News and Events' />
      <div className='news'>
        <HeroSection
          title='News'
          content='Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth.'
          image='/images/about-hero.svg'
        />

        <div className='container news-body'>
          <div className='heading'>
            <h2>All News</h2>
            <select className='form-select'>
              <option value=''>All year</option>
              <option value=''>Monthly</option>
              <option value=''>Weekly</option>
            </select>
          </div>

          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </Layout>
  );
};

export default News;
