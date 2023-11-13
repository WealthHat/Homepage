import React from 'react';
import Layout from '@/components/Layout';
import Heading from '@/components/heading/heading';
import Image from 'next/image';
import HeroSection from '@/common/hero-section/hero-section';

const AboutUs = () => {
  return (
    <Layout>
      <div className='about-us'>
        <HeroSection
          title='Why Choose WealtHat?'
          content='WealthHat provides comprehensive wealth advisory and financial
              planning services spanning investment advisory, tax advisory,
              retirement planning, and wealth preservation to individuals,
              families, and businesses. Our focus is always upon you and the
              needs of your wealth.'
          image='/images/about-hero.svg'
        />

        <div className='apart'>
          <div className='container'>
            <h1>What Sets Us Apart</h1>
            <p>
              WealthHat is like no other. We take a distinctive approach to
              serving our unique clients and their loved ones.
            </p>
            <div className='row'>
              <div className='col-md-4'>
                <h3>Bridging the Gap with Goals-Based Planning</h3>
                <p>At WealthHat, we believe in the power of goals-centered planning. Our approach begins with setting clear, achievable goals that align with your vision for the future. Whether you're planning for retirement, saving for your child's education, or building wealth over time, our team of expert advisors will work with you to bridge the gap between where you are today and where you want to be tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
