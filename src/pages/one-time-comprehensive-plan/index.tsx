import HeroSection from '@/common/hero-section/hero-section';
import ServiceCard from '@/common/service-card/service-card';
import Layout from '@/components/Layout';
import MetaTags from '@/components/meta-tags';
import CardSlider from '@/common/slick';
import React from 'react';

const OneTimeComprehensivePlan = () => {
  return (
    <Layout>
      <MetaTags
        title='One-Time Comprehensive Plan'
        description='One-Time Comprehensive Plan'
      />

      <div className='one-times'>
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

        <div className='switch'>
          <div className='switch-left'>
            One-Time Customised Investment Plan
          </div>

          <div className='switch-right active'>
            One-Time Comprehensive Financial Plan
          </div>
        </div>

        <div className='content'>
          <div className='container'>
            <p>
              Our One-Time Comprehensive Financial Plan goes beyond just
              investment planning to offer a more comprehensive financial plan.
              We define your financial objectives, duration, and risk tolerance,
              taking into account other prevailing circumstances such as estate
              planning, insurance needs, and retirement goals. A comprehensive
              financial plan serves as a foundational guide, followed by not
              just portfolio construction but also debt management, retirement
              planning, and estate planning. During our maximum of four (4)
              meetings (via phone, video, or in-person at our office), we
              collaboratively create a customized financial plan designed for
              you to implement independently.{' '}
              <b>This plan costs $3,500 (one-time fee)</b>
            </p>

            <div className='row mt-5'>
              <CardSlider>

              <div className='col-4 columns'>
                <ServiceCard
                  title='Personalised Consultation'
                  content='Schedule a one-on-one meeting with our financial experts to discuss your broader financial goals, risk tolerance, personal circumstances, and current financial landscape.'
                  color='light'
                  more={false}
                  height='290px'
                />
            
              </div>
              <div className='col-4 columns'>
                <ServiceCard
                  title='Comprehensive Assessment'
                  content=' We take a deep dive into all aspects of your financial life, including assets, liabilities, income, expenses, tax considerations, estate and retirement plans to create a holistic financial plan.'
                  color='light'
                  more={false}
                  height='290px'
                />
              </div>
              <div className='col-4 columns'>
                <ServiceCard
                  title='Multi-faceted Financial Guidance'
                  content='Apart from investment guidance, we also provide actionable advice on debt management, retirement planning, tax optimisation, and estate planning/trust advisory.'
                  color='light'
                  more={false}
                  height='290px'
                />
              </div>
              <div className='col-4 columns'>
                <ServiceCard
                  title='Actionable Roadmap'
                  content='Our plan includes a step-by-step guide that outlines how to implement not just your investment plan but your overall financial strategy, complete with timelines and milestones.'
                  color='light'
                  more={false}
                  height='290px'
                />
              </div>
              <div className='col-4 columns'>
                <ServiceCard
                  title='Resource Kit'
                  content='Receive a comprehensive set of tools and resources like worksheets, checklists, and guides to assist you in implementing and tracking your comprehensive financial plan on your own.'
                  color='light'
                  more={false}
                  height='290px'
                />
              </div>
              </CardSlider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OneTimeComprehensivePlan;
