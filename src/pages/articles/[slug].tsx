import Layout from '@/components/Layout';
import Blog from '@/components/blog/blog';
import MetaTags from '@/components/meta-tags';
import Subscribe from '@/components/subscribe/subscribe';
import React from 'react';
import Image from 'next/image';
import LinkedIn from '@/svgs/linkedin';
import Twitter from '@/svgs/twitter';
import Facebook from '@/svgs/facebook';
import Instagram from '@/svgs/instagram';
import GoBack from '@/common/go-back';

const BlogDetails = () => {
  return (
    <Layout>
      <MetaTags title='Article' description='Read Article' />
      <div className='article'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 article-left'>
              <div className='d-flex align-items-center gap-3'>
                <div>
                  <GoBack />
                </div>
                <p> 22 Aug, 2023</p>
                <p>2 mins</p>
              </div>
              <h1>How are family offices positioning their portfolios?</h1>

              <div className='d-flex align-items-center gap-4'>
                <small>Samuel BABAJIDE </small>
                <span>CHIEF INVESTMENT STRATEGIST AND CHIEF ECONOMIST </span>
              </div>
            </div>

            <div className='col-lg-6 article-right'>
              <Image
                src='/images/article-hero.svg'
                alt='hero'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='summary'>
        <div className='container'>
          <div className='row'>
            <div className='summary-box'>
              <h2>Summary</h2>
              <p>
                WealthHat is the world’s largest alternative asset manager, with
                $1 trillion in AUM. We serve institutional and individual
                investors by building strong businesses that deliver lasting
                value. Our scale – with more than 12,600 real estate assets* and
                230+ portfolio companies – enables us to invest in dynamic
                sectors positioned for long-term growth. WealthHat is the
                world’s largest alternative asset manager, WealthHat is the
                world’s largest alternative asset manager, with $1 trillion in
                AUM. We serve institutional and individual investors by building
                strong businesses that deliver lasting value. Our scale – with
                more than 12,600 real estate assets* and 230+ portfolio
                companies – enables us to invest in dynamic sectors positioned
                for long-term growth. WealthHat is the world’s largest
                alternative asset manager, WealthHat is the world’s largest
                alternative asset manager, with $1 trillion in AUM. We serve
                institutional and individual investors by building strong
                businesses that deliver lasting value. Our scale – with more
                than 12,600 real estate assets* and 230+ portfolio companies –
                enables us to invest in dynamic sectors positioned for long-term
                growth. WealthHat is the world’s largest alternative asset
                manager, WealthHat is the world’s largest alternative asset
                manager, with $1 trillion in AUM. We serve institutional and
                individual investors by building strong businesses that deliver
                lasting value. Our scale – with more than 12,600 real estate
                assets* and 230+ portfolio companies – enables us to invest in
                dynamic sectors positioned for long-term growth. WealthHat is
                the world’s largest alternative asset manager,{' '}
              </p>

              <div className='download-box'>
                <div className='download-box-left'>
                  <small>Family Office Investment Report (PDF 1MB)</small>
                </div>

                <div className='download-box-right'>
                  <Image
                    src='/images/download-image.svg'
                    alt='hero'
                    width={100}
                    height={100}
                  />
                </div>
              </div>

              <div className='share-box'>
                <small>Share this article : </small>
                <div className='social-box'>
                  <LinkedIn />
                  <Twitter />
                  <Facebook />
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
      <Subscribe />
    </Layout>
  );
};

export default BlogDetails;
