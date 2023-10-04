import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import Image from 'next/image';
import React from 'react';

const OneTimeAdvice = () => {
  return (
    <Layout>
      <MetaTags title='One time advice' description='One time advice' />

      <div className='one-time-container'>
        <div className='onetime'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 onetime-left'>
                <h1>One Time Financial & Investment Plan</h1>

                <p>
                  WealthHat is the world’s largest alternative asset manager,
                  with $1 trillion in AUM. We serve institutional and individual
                  investors by building strong businesses that deliver lasting
                  value. Our scale – with more than 12,600 real estate assets*
                  and 230+ portfolio companies.{' '}
                </p>
              </div>

              <div className='col-lg-6 onetime-right'>
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

        <div className='note'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 note-left'>
                <Image
                  src='/images/article-hero.svg'
                  alt='hero'
                  width={100}
                  height={100}
                />
              </div>

              <div className='col-lg-7 note-right'>

                <p>
                 WealthHat is the world’s largest alternative asset manager, with $1 trillion in AUM. We serve institutional and individual investors by building strong businesses that deliver lasting value. Our scale – with more than 12,600 real estate assets* and 230+ portfolio companies – enables us to invest in dynamic sectors positioned for long-term growth. 
                </p>
                <p>
                  WealthHat is the world’s largest alternative asset manager, with $1 trillion in AUM. We serve institutional and individual investors by building strong businesses that deliver lasting value. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OneTimeAdvice;
