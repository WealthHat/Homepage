import React from "react";
import Layout from "@/components/Layout";
import Heading from "@/components/heading/heading";
import ClientCard from "@/common/client-card/client-card";
import HeroSection from "@/common/hero-section/hero-section";
import MetaTags from "@/components/meta-tags";
import CardSlider from "@/common/slick";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const OurClients = () => {
  return (
    <Layout>
      <MetaTags title="Our Clients" description="Our Clients" />
      <div className="our-clients">
        <HeroSection
          title="Our Clients"
          content="Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth."
          image="/images/about-hero.svg"
          showbutton={true}
        />

        <div className="private">
          <div className="container">
            <AnimatedWrapper>
              <p>
                Growing substantial wealth, preserving it over time, and
                harmonizing the dynamics of family and business interests, all
                while maintaining a preferred lifestyle, presents a formidable
                challenge. WealthHat acknowledges the intricate nature of this
                endeavor. We recognize that our clients constitute a diverse
                group, each with their own distinct financial needs and
                aspirations. This understanding drives us to meticulously
                categorize our client segments, enabling us to craft tailored
                solutions that precisely align with their unique requirements.
              </p>
            </AnimatedWrapper>

            <AnimatedWrapper delay="300">
              <p>
                {`At WealthHat, we embrace the inherent complexity of wealth
              management and honor the diversity of our clientele. We understand
              that adopting a one-size-fits-all approach falls short in meeting
              the intricate demands of our clients' financial journeys.`}
              </p>
            </AnimatedWrapper>
          </div>
        </div>

        <div className="client-section">
          <div className="container">
            <div className="row desktop">
              <div className="col-lg-4 col-md-6 client-box">
                <AnimatedWrapper>
                  <ClientCard
                    title="High Net Worth & Ultra High Net Individuals"
                    content='"Tailored wealth management solutions designed specifically for individuals and families with significant assets. We understand the unique challenges and opportunities that come with substantial wealth and provide strategies to preserve and grow your assets."'
                    color="light"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col-lg-4 col-md-6 client-box">
                <AnimatedWrapper delay="300">
                  <ClientCard
                    title="Beneficiaries & Heirs"
                    content='"Guidance and support to beneficiaries and heirs to ensure seamless transition and continuation of wealth. Our experts help navigate the complexities of inheritance, trusts, and legacy planning."'
                    color="dark"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col-lg-4 col-md-6 order-md-1 client-box">
                <AnimatedWrapper delay="500">
                  <ClientCard
                    title="Families & Spouses"
                    content={`"Comprehensive financial planning that considers the needs of every family member. From joint investments to educational trusts, we make sure your family's financial well-being is secured"`}
                    color="light"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col-lg-4 col-md-6  order-md-1 client-box">
                <AnimatedWrapper>
                  <ClientCard
                    title="Families & Family Businesses"
                    content='"Expertise in aligning family values with business goals. We offer strategies for succession planning, risk management, and growth to ensure your family business thrives for generations."'
                    color="dark"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col-lg-4 col-md-6 order-md-2 client-box">
                <AnimatedWrapper delay="300">
                  <ClientCard
                    title="Entrepreneurs & Founders"
                    content='"Dedicated support for business leaders, from startup phase to exit strategy. Our financial advisors help entrepreneurs optimize their personal and business wealth for maximum impact."'
                    color="light"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col-lg-4 col-md-6 order-md-2 client-box">
                <AnimatedWrapper delay="500">
                  <ClientCard
                    title="Senior Executives"
                    content='"Customized financial planning for top-tier professionals. Our services address the unique needs of senior executives, from stock option planning to retirement strategies."'
                    color="dark"
                  />
                </AnimatedWrapper>
              </div>
            </div>

            <AnimatedWrapper>
              <div className="row mobile">
                <CardSlider>
                  <div className="col-4 client-box">
                    <ClientCard
                      title="High Net Worth & Ultra High Net Individuals"
                      content='"Tailored wealth management solutions designed specifically for individuals and families with significant assets. We understand the unique challenges and opportunities that come with substantial wealth and provide strategies to preserve and grow your assets."'
                      color="light"
                    />
                  </div>

                  <div className="col-4 client-box">
                    <ClientCard
                      title="Beneficiaries & Heirs"
                      content='"Guidance and support to beneficiaries and heirs to ensure seamless transition and continuation of wealth. Our experts help navigate the complexities of inheritance, trusts, and legacy planning."'
                      color="dark"
                    />
                  </div>

                  <div className="col-4 client-box">
                    <ClientCard
                      title="Families & Spouses"
                      content={`"Comprehensive financial planning that considers the needs of every family member. From joint investments to educational trusts, we make sure your family's financial well-being is secured"`}
                      color="light"
                    />
                  </div>

                  <div className="col-4 client-box">
                    <ClientCard
                      title="Families & Family Businesses"
                      content='"Expertise in aligning family values with business goals. We offer strategies for succession planning, risk management, and growth to ensure your family business thrives for generations."'
                      color="dark"
                    />
                  </div>

                  <div className="col-4 client-box">
                    <ClientCard
                      title="Entrepreneurs & Founders"
                      content='"Dedicated support for business leaders, from startup phase to exit strategy. Our financial advisors help entrepreneurs optimize their personal and business wealth for maximum impact."'
                      color="light"
                    />
                  </div>

                  <div className="col-4 client-box">
                    <ClientCard
                      title="Senior Executives"
                      content='"Customized financial planning for top-tier professionals. Our services address the unique needs of senior executives, from stock option planning to retirement strategies."'
                      color="dark"
                    />
                  </div>
                </CardSlider>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        <div className="in-touch">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <AnimatedWrapper>
                  <h3>Get in Touch</h3>
                </AnimatedWrapper>
              </div>

              <div className="col-12 col-md-9">
                <AnimatedWrapper delay="300">
                  <p>
                    If you are interested in becoming a client, please complete
                    the form via the ‘become a client’ button below.
                    Alternatively, if you are already a client, or if you have a
                    question about how we help clients in particular
                    circumstances, please use the ‘ contact us’ button.
                  </p>
                </AnimatedWrapper>

                <AnimatedWrapper delay="500">
                  <p>
                    We will get back to you as soon as we can during office
                    hours, which are Monday to Friday. 8am to 8pm ( UK time).
                    except for Uk public holidays.
                  </p>
                </AnimatedWrapper>

                <AnimatedWrapper delay="700">
                  <div className="button-container">
                    <button className="button">Become a client</button>

                    <button className="button">Contact us</button>
                  </div>
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurClients;
