import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import Image from 'next/image';
import React from 'react';

const OngoingAdvisory = () => {
  return (
    <Layout>
      <MetaTags title='Oongoing advisory' description='Oongoing advisory' />

      <div className='advisory-container'>
        {/* advisoryhero */}
        <div className='advisory'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 advisory-left'>
                <h1>Ongoing Financial & Investment Plan</h1>

                <p>
                  WealthHat is the world’s largest alternative asset manager,
                  with $1 trillion in AUM. We serve institutional and individual
                  investors by building strong businesses that deliver lasting
                  value. Our scale – with more than 12,600 real estate assets*
                  and 230+ portfolio companies.{' '}
                </p>
              </div>

              <div className='col-lg-6 advisory-right'>
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

        {/* note component */}
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
                  WealthHat is the world’s largest alternative asset manager,
                  with $1 trillion in AUM. We serve institutional and individual
                  investors by building strong businesses that deliver lasting
                  value. Our scale – with more than 12,600 real estate assets*
                  and 230+ portfolio companies – enables us to invest in dynamic
                  sectors positioned for long-term growth.
                </p>
                <p>
                  WealthHat is the world’s largest alternative asset manager,
                  with $1 trillion in AUM. We serve institutional and individual
                  investors by building strong businesses that deliver lasting
                  value.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* profer component */}
        <div className='proffer'>
          <h1>How we proffer this Solution</h1>

          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h3>Investments</h3>
                <p>
                  We seek to deliver outstanding performance for institutional
                  and individual We seek to deliver outstanding performance for
                  institutional
                </p>
              </div>
              
              <div className='col-md-4'>
                <h3>Investments</h3>
                <p>
                  We seek to deliver outstanding performance for institutional
                  and individual We seek to deliver outstanding performance for
                  institutional
                </p>
              </div>

              <div className='col-md-4'>
                <h3>Investments</h3>
                <p>
                  We seek to deliver outstanding performance for institutional
                  and individual We seek to deliver outstanding performance for
                  institutional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OngoingAdvisory;
