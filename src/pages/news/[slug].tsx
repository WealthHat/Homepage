import React from 'react';
import NewsCard from '@/common/news-card';
import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import GoBack from '@/common/go-back';

const NewsDetails = () => {
  return (
    <Layout>
      <MetaTags title='News and Events' description='News and Events' />

      <div className='news-details'>
        <div className='container'>
          <small>
            <GoBack />
            28 Jul 2023
          </small>
          <h1>
            WealthHat and Creative Planning Announce Agreement to Acquire
            WealthHat Personal Financial Management Business
          </h1>
          <p>
            WealthHat is the world’s largest alternative asset manager, with $1
            trillion in AUM. We serve institutional and individual investors by
            building strong businesses that deliver lasting value. Our scale –
            with more than 12,600 real estate assets* and 230+ portfolio
            companies – enables us to invest in dynamic sectors positioned for
            long-term growth. WealthHat is the world’s largest alternative asset
            manager, <br />
            WealthHat is the world’s largest alternative asset manager, with $1
            trillion in AUM. We serve institutional and individual investors by
            building strong businesses that deliver lasting value. Our scale –
            with more than 12,600 real estate assets* and 230+ portfolio
            companies – enables us to invest in dynamic sectors positioned for
            long-term growth. WealthHat is the world’s largest alternative asset
            manager, WealthHat is the world’s largest alternative asset manager,
            with $1 trillion in AUM. We serve institutional and individual
            investors by building strong businesses that deliver lasting value.
            Our scale – with more than 12,600 real estate assets* and 230+
            portfolio companies – enables us to invest in dynamic sectors
            positioned for long-term growth. WealthHat is the world’s largest
            alternative asset manager,
          </p>
          <p>
            WealthHat is the world’s largest alternative asset manager, with $1
            trillion in AUM. We serve institutional and individual investors by
            building strong businesses that deliver lasting value. Our scale –
            with more than 12,600 real estate assets* and 230+ portfolio
            companies – enables us to invest in dynamic sectors positioned for
            long-term growth. WealthHat is the world’s largest alternative asset
            manager, <br />
            WealthHat is the world’s largest alternative asset manager, with $1
            trillion in AUM. We serve institutional and individual investors by
            building strong businesses that deliver lasting value. Our scale –
            with more than 12,600 real estate assets* and 230+ portfolio
            companies – enables us to invest in dynamic sectors positioned for
            long-term growth. WealthHat is the world’s largest alternative asset
            manager, WealthHat is the world’s largest alternative asset manager,
            with $1 trillion in AUM. We serve institutional and individual
            investors by building strong businesses that deliver lasting value.
            Our scale – with more than 12,600 real estate assets* and 230+
            portfolio companies – enables us to invest in dynamic sectors
            positioned for long-term growth. WealthHat is the world’s largest
            alternative asset manager,
          </p>

          <div className='contact'>
            <h2>Media Contact</h2>
            <p>Peter Johnson</p>
            <p>(08) 248-7310</p>
            <p>PeterJohnson@WealthHat.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetails;
