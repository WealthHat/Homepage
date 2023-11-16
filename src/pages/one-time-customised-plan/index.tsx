import HeroSection from '@/common/hero-section/hero-section';
import ServiceCard from '@/common/service-card/service-card';
import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import Image from 'next/image';
import React from 'react';

const OneTimeCustomisedPlan = () => {
  return (
    <Layout>
      <MetaTags
        title='One-Time Customised Plan'
        description='One-Time Customised Plan'
      />

      <div className='one-time-container'>
        {/* onetimehero */}
        <HeroSection
          title='One-Time Customised Plan'
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

        <div className='customised-switch'>
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
                  title='Personalised Consultation'
                  content='Schedule a one-on-one meeting with our financial experts to discuss your goals, risk tolerance, and existing financial landscape.'
                  color='light'
                  more={false}
                  height='270px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='Comprehensive Assessment'
                  content='We conduct an in-depth evaluation of your financial standing, including assets, liabilities, income, and expenses to create a tailored plan.'
                  color='light'
                  more={false}
                  height='270px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='Investment Guidance'
                  content='Based on your profile, we offer specific investment recommendations, including asset allocation strategies to meet your financial objectives.'
                  color='light'
                  more={false}
                  height='270px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='Actionable Roadmap'
                  content='We provide a step-by-step guide outlining how to implement your financial plan, complete with timelines and milestones.'
                  color='light'
                  more={false}
                  height='270px'
                />
              </div>
              <div className='col-lg-4 col-md-4'>
                <ServiceCard
                  title='Resource Kit'
                  content="You'll receive a set of tools and resources (worksheets, checklists, and guides) to help you implement and track your investment plan independently."
                  color='light'
                  more={false}
                  height='270px'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OneTimeCustomisedPlan;
