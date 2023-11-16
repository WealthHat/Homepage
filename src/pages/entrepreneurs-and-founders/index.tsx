import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/common/hero-section/hero-section';
import Comprehensive from '@/components/comprehensive';
import Blog from '@/components/blog/blog';
import Subscribe from '@/components/subscribe/subscribe';
import MetaTags from '@/components/meta-tags';

const Entrepreneurs = () => {
  return (
    <Layout>
      <MetaTags
        title='Entrepreneurs and Founders'
        description='Entrepreneurs and Founders'
      />
      <div className='ultra-high'>
        <HeroSection
          title='Entrepreneurs and Founders'
          content='Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth.'
          image='/images/about-hero.svg'
          showbutton={true}
        />

        <div className='content-section'>
          <div className='container content-container'>
            <div className='row'>
              <div className='col-7 col-left'>
                <p>
                  WealthHat recognizes the unique journey of entrepreneurs and
                  founders who have not only built their wealth but also created
                  thriving businesses. We specialize in providing tailored
                  financial solutions that address the distinct circumstances
                  and challenges faced by these visionary leaders.
                </p>

                <div className='mb-3'>
                  <h3>
                    Understanding Their Unique Challenges and Circumstances
                  </h3>
                  <p>
                    Entrepreneurs and founders often have a wealth portfolio
                    that includes concentrated public company positions, private
                    investment companies, family foundations, and family
                    offices. Their enterprises often expand across borders,
                    introducing complexities related to taxation, legal
                    requirements, and regulatory compliance. The ever-evolving
                    landscape of investment trends, evolving operational
                    practices, and family dynamics further contribute to the
                    intricacy of their financial situation.
                  </p>
                </div>

                <div className='mb-3'>
                  <h3>Identifying Their Needs</h3>
                  <p>
                    Entrepreneurs and founders require financial strategies that
                    not only preserve their wealth but also fuel its growth.
                    They seek solutions that are tailored to their unique
                    circumstances, encompassing tax optimization, business
                    succession planning, and the management of intricate
                    financial portfolios. Additionally, they may need guidance
                    on scaling their businesses, diversifying investments, and
                    planning for wealth transfer to the next generation.
                  </p>
                </div>
              </div>

              <div className='col-5 col-right'>
                <div>
                  <h3>How WealthHat Understands and Meets Their Needs</h3>
                  <p>
                    WealthHat has a proven track record of assisting
                    entrepreneurs and founders facing similar challenges. Our
                    team comprises experts with diverse backgrounds in capital
                    markets, investment banking, portfolio management, wealth
                    structuring, and family office management. We seamlessly
                    merge institutional resources with personalized service to
                    provide solutions aligned with the unique needs of
                    entrepreneurs and founders.
                  </p>

                  <p>
                    We offer a comprehensive suite of services tailored to
                    empower entrepreneurs and founders, including wealth
                    preservation strategies, access to institutionally-backed
                    investment opportunities, succession planning guidance, and
                    expert advice on managing complex financial portfolios. Our
                    institutional-level analytics, actionable strategies, and
                    best practices ensure the prudent management of both
                    personal and business assets.
                  </p>

                  <p>
                    We invite you to connect with us at WealthHat, where we can
                    collaborate to create a customized financial plan designed
                    to address the specific needs of entrepreneurs and founders.
                    Your financial success and the continued growth of your
                    business are our top priorities, and we're committed to
                    helping you achieve them.
                  </p>

                  <button>Schedule a call</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='comprehensive-services'>
          <Comprehensive
            title='Comprehensive services for your wealth'
            subtitle='We serve institutional and individual investors by building strong
        businesses'
          />
        </div>

        <Blog />

        <Subscribe />
      </div>
    </Layout>
  );
};

export default Entrepreneurs;
