import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/common/hero-section/hero-section";
import Comprehensive from "@/components/comprehensive";
import Blog from "@/components/blog/blog";
import Subscribe from "@/components/subscribe/subscribe";
import MetaTags from "@/components/meta-tags";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const UltraHighNetworth = () => {
  return (
    <Layout>
      <MetaTags title="High networth" description="High networth" />
      <div className="ultra-high">
        <HeroSection
          title="High Net Worth & Ultra High Net Worth Individuals"
          content="Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth."
          image="/images/about-hero.svg"
          showbutton={true}
        />

        <div className="content-section">
          <div className="container content-container">
            <AnimatedWrapper>
              <div className="row">
                <div className="col-12 col-md-7 col-left">
                  <p>
                    {`  At WealthHat, we understand that the financial circumstances
                  of High Net Worth Individuals (HNWIs) and Ultra High Net Worth
                  Individuals (UHNWIs) are not only significant but also
                  intricate. Their wealth often comprises a diverse array of
                  assets, including concentrated public company positions,
                  private investment companies, family foundations, and family
                  offices. Let's delve deeper into their unique challenges,
                  needs, and how WealthHat can address them.`}
                  </p>

                  <div className="mb-3">
                    <h3>Understanding Their Unique Situations</h3>
                    <p>
                      Many of our HNWI and UHNWI clients have financial
                      interests that go beyond one country. They deal with
                      international money matters, which can lead to tricky tax
                      issues, legal questions, and rules from different
                      countries to follow. On top of that, they have to keep up
                      with the ever-changing world of investing, make sure their
                      businesses run smoothly, and handle family matters related
                      to their money.
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3>Addressing Their Unique Needs</h3>
                    <p>
                      These wealthy individuals need specialized help with their
                      money. They want strategies that not only make their
                      wealth grow but also save them as much as possible on
                      taxes. They also look for advice on how to deal with their
                      mix of assets, from private investments to things that are
                      harder to turn into cash. Plus, they might need guidance
                      on making big financial moves, like buying or selling
                      major assets.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-5 col-right">
                  <div>
                    <h3>How We Help</h3>
                    <p>
                      At WealthHat, we bring together a team of seasoned
                      professionals with backgrounds in finance, investments,
                      wealth management, and family office operations. Our
                      approach combines the best practices and resources of
                      major financial institutions with the personalized
                      attention typically associated with smaller boutique
                      firms. This fusion allows us to craft bespoke financial
                      plans that seamlessly align with the unique needs and
                      aspirations of our clients.
                    </p>

                    <p>
                      {`We'd love to talk to you about how we can make a customized
                    financial plan just for you, whether you're a High Net Worth
                    Individual (HNWI) or an Ultra High Net Worth Individual
                    (UHNWI). Your financial success is our top priority, and
                    we're committed to helping you reach your wealth goals.`}
                    </p>

                    <button>Schedule a call</button>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        <div className="comprehensive-services">
          <Comprehensive
            title="Comprehensive services for your wealth"
            subtitle="We serve institutional and individual investors by building strong
        businesses"
          />
        </div>

        <Blog />

        <Subscribe />
      </div>
    </Layout>
  );
};

export default UltraHighNetworth;
