import HeroSection from '@/common/hero-section/hero-section';
import ServiceCard from '@/common/service-card/service-card';
import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import React from 'react';

const OneTimeComprehensivePlan = () => {
  return (
    <Layout>
      <MetaTags title='One time advice' description='One time advice' />

      <div className='one-time-container'>
        {/* onetimehero */}
        <HeroSection
          title='One-Time Comprehensive Plan'
          content='This plan is well-suited for those with simpler financial situations, DIY enthusiasts, or individuals who are just starting out and prefer not to have ongoing support.'
          image='/images/about-hero.svg'
          showbutton={true}
        />

        {/* note component */}
        <div className='note'>
          <div className='container'>
            <h4>
              We provide two distinct service packages for our clients: <br />{' '}
              <span>
                {' '}
                a One-Time Customized Investment Plan and a One-Time
                Comprehensive Financial Plan{' '}
              </span>
            </h4>
          </div>
        </div>

        <div className='comprehensive-switch'>
          <div className='switch-left  active'>
            One-Time Customised Investment Plan
          </div>

          <div className='switch-right'>
            One-Time Comprehensive Financial Plan
          </div>
        </div>

        <div className='content'>
          <div className='container'>
            <p>
              Our one-time customised investment plan involves a comprehensive,
              step-by-step process to define your financial objectives,
              duration, risk tolerance, and other prevailing circumstances.
              Following this, we develop an Investment Policy Statement that
              serves as a foundational guide. Based on this, we construct your
              investment portfolio, allocate assets, select securities, and
              draft an actionable roadmap for implementation. During our maximum
              of four (2) meetings (via phone, video, or in-person at our
              office), we'll work together to create a personalised, customised
              investment plan that empowers you to implement our recommendations
              on your own. <b>This plan costs $2,000 (one-time fee)</b>
            </p>

            <div className='row mt-5'>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='One-Time Customised Plan'
                  content='We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support.'
                  color='light'
                  more={false}
                  height='340px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='One-Time Customised Plan'
                  content='We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support.'
                  color='light'
                  more={false}
                  height='340px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='One-Time Customised Plan'
                  content='We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support.'
                  color='light'
                  more={false}
                  height='340px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='One-Time Customised Plan'
                  content='We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support.'
                  color='light'
                  more={false}
                  height='340px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='One-Time Customised Plan'
                  content='We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support.'
                  color='light'
                  more={false}
                  height='340px'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OneTimeComprehensivePlan;
