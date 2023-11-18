import React from 'react';
import Layout from '@/components/Layout';
import Heading from '@/components/heading/heading';
import HeroSection from '@/common/hero-section/hero-section';
import Comprehensive from '@/components/comprehensive';
import Blog from '@/components/blog/blog';
import Subscribe from '@/components/subscribe/subscribe';
import MetaTags from '@/components/meta-tags';

const Families = () => {
  return (
    <Layout>
      <MetaTags
        title='Families and Spouses'
        description='Families and Spouses'
      />
      <div className='ultra-high'>
        <HeroSection
          title='Families and Spouses'
          content='Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth.'
          image='/images/about-hero.svg'
          showbutton={true}
        />

        <div className='content-section'>
          <div className='container content-container'>
            <div className='row'>
              <div className='col-12 col-md-7 col-left'>
                <p>
                  We understand that family is at the heart of wealth, and
                  that's why WealthHat is here to assist families and spouses in
                  managing their financial journey. Families often have unique
                  circumstances, and we're well-equipped to address their
                  specific needs.
                </p>

                <div className='mb-3'>
                  <h3>
                    Understanding Their Unique Challenges and Circumstances
                  </h3>
                  <p>
                    Families and spouses often have a mix of assets, including
                    concentrated holdings in public companies, private
                    investment firms, family foundations, and even family
                    offices. As their interests extend across multiple
                    locations, they face complex tax, legal, and regulatory
                    challenges. Additionally, the ever-changing landscape of
                    investment trends, evolving operational practices, and
                    changing family dynamics adds to the complexity.
                  </p>
                </div>

                <div className='mb-3'>
                  <h3>Identifying Their Needs</h3>
                  <p>
                    Families and spouses require tailored financial solutions
                    that go beyond the ordinary. They seek strategies that help
                    grow and safeguard their wealth while optimizing tax
                    efficiency. Managing a diverse financial portfolio requires
                    attention to detail, addressing complexities that are unique
                    to their situation. Families may also require guidance on
                    succession planning, wealth transfer, and ensuring financial
                    security for spouses and future generations.
                  </p>
                </div>
              </div>

              <div className='col-12 col-md-5 col-right'>
                <div>
                  <h3>How WealthHat Understands and Meets Their Needs</h3>
                  <p>
                    WealthHat has a strong track record of assisting families
                    and spouses in similar situations. Our team comprises
                    experts with diverse backgrounds, including capital markets,
                    investment banking, portfolio management, wealth
                    structuring, and family office management. We blend
                    institutional resources with personalized service to provide
                    solutions that align with the unique needs of families and
                    spouses.
                  </p>

                  <p>
                    We offer a comprehensive range of services tailored to
                    empower families and spouses, including strategies for
                    wealth preservation, institutionally-backed investment
                    opportunities, guidance on succession planning, and expert
                    advice on managing complex financial portfolios. Our
                    institutional-level analytics, actionable strategies, and
                    best practices ensure the prudent management of family
                    assets.
                  </p>

                  <p>
                    We invite you to connect with us at WealthHat, where we can
                    collaborate to create a customized financial plan designed
                    to address the specific needs of your family and spouse.
                    Your family's financial well-being is our top priority, and
                    we're dedicated to helping you achieve it.
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

export default Families;
