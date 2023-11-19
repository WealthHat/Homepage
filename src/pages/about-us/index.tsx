import React from "react";
import Layout from "@/components/Layout";
import Heading from "@/components/heading/heading";
import Image from "next/image";
import HeroSection from "@/common/hero-section/hero-section";
import Comprehensive from "@/components/comprehensive";
import MetaTags from "@/components/meta-tags";
import CardSlider from "@/common/slick";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const AboutUs = () => {
  return (
    <Layout>
      <MetaTags title="About Us" description="About Us" />
      <div className="about-us">
        <HeroSection
          title="Why Choose WealtHat?"
          content="WealthHat provides comprehensive wealth advisory and financial
              planning services spanning investment advisory, tax advisory,
              retirement planning, and wealth preservation to individuals,
              families, and businesses. Our focus is always upon you and the
              needs of your wealth."
          image="/images/about-hero.svg"
          showbutton={true}
        />

        <div className="apart">
          <div className="container apart-container">
            <AnimatedWrapper delay="300">
              <h1>What Sets Us Apart</h1>
            </AnimatedWrapper>

            <AnimatedWrapper delay="500">
              <p>
                WealthHat is like no other. We take a distinctive approach to
                serving our unique clients and their loved ones.
              </p>
            </AnimatedWrapper>

            <AnimatedWrapper delay="300">
              <div className="row apart-box box1">
                <div className="col-md-4 apart-card">
                  <h3>Bridging the Gap with Goals-Based Planning</h3>
                  <small>
                    {`At WealthHat, we believe in the power of goals-centered
                  planning. Our approach begins with setting clear, achievable
                  goals that align with your vision for the future. Whether
                  you're planning for retirement, saving for your child's
                  education, or building wealth over time, our team of expert
                  advisors will work with you to bridge the gap between where
                  you are today and where you want to be tomorrow.`}
                  </small>
                </div>

                <div className="col-md-4 apart-card">
                  <h3>Clarity Amidst Complexity and Steadying your Course</h3>
                  <small>
                    {` Many financial planning challenges can be complex and
                  daunting. We're here to help you navigate these complexities
                  and achieve greater clarity and control over your financial
                  future. Our team offers objective, independent advice tailored
                  to your unique needs and objectives. We will work with you to
                  steady your course and make informed decisions that align with
                  your goals.`}
                  </small>
                </div>

                <div className="col-md-4 apart-card">
                  <h3>Centralized Reporting and Dedication</h3>
                  <small>
                    At WealthHat, we provide a centralized and unified reporting
                    structure that offers greater visibility and transparency
                    into your portfolio performance and progress. We are
                    dedicated to offering world-class support to our clients and
                    delivering consistent results that meet and exceed your
                    expectations.
                  </small>
                </div>

                <div className="col-md-4 apart-card">
                  <h3>Expertise in Every Niche and Depth Over Breadth</h3>
                  <small>
                    {` Our team of expert advisors boasts a wealth of expertise
                  across a broad range of financial areas. We believe in depth
                  over breadth, focusing our resources on providing targeted,
                  specialized advice tailored to your unique needs. Whether
                  you're looking for investment advice, retirement planning
                  strategies, or guidance on trusts and estates, we have the
                  expertise to help you achieve your goals.`}
                  </small>
                </div>

                <div className="col-md-4 apart-card">
                  <h3>Transparent Fees and Commitment</h3>
                  <small>
                    {` We believe that clarity and transparency are essential
                  components of any successful relationship. That's why we're
                  committed to offering transparent fees and keeping you
                  informed about the costs involved in our services. We are
                  dedicated to building long-term relationships with our clients
                  that are founded on mutual trust, respect, and commitment.`}
                  </small>
                </div>

                <div className="col-md-4 apart-card">
                  <h3>A Fiduciary Approach and Your Dreams</h3>
                  <small>
                    {`Our commitment to a fiduciary approach means that we always
                  put our clients' interests first. We prioritize your needs,
                  goals, and objectives above all else, ensuring that you always
                  receive objective, independent advice that is tailored to your
                  unique situation. You can trust us to act in your best
                  interests in all situations, helping you to achieve your
                  financial goals with confidence.`}
                  </small>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay="300">
              <div className="row apart-box box2">
                <CardSlider>
                  <div className="col-md-4 apart-card">
                    <h3>Bridging the Gap with Goals-Based Planning</h3>
                    <small>
                      {`  At WealthHat, we believe in the power of goals-centered
                    planning. Our approach begins with setting clear, achievable
                    goals that align with your vision for the future. Whether
                    you're planning for retirement, saving for your child's
                    education, or building wealth over time, our team of expert
                    advisors will work with you to bridge the gap between where
                    you are today and where you want to be tomorrow.`}
                    </small>
                  </div>

                  <div className="col-md-4 apart-card">
                    <h3>Clarity Amidst Complexity and Steadying your Course</h3>
                    <small>
                      {` Many financial planning challenges can be complex and
                    daunting. We're here to help you navigate these complexities
                    and achieve greater clarity and control over your financial
                    future. Our team offers objective, independent advice
                    tailored to your unique needs and objectives. We will work
                    with you to steady your course and make informed decisions
                    that align with your goals.`}
                    </small>
                  </div>

                  <div className="col-md-4 apart-card">
                    <h3>Centralized Reporting and Dedication</h3>
                    <small>
                      At WealthHat, we provide a centralized and unified
                      reporting structure that offers greater visibility and
                      transparency into your portfolio performance and progress.
                      We are dedicated to offering world-class support to our
                      clients and delivering consistent results that meet and
                      exceed your expectations.
                    </small>
                  </div>

                  <div className="col-md-4 apart-card">
                    <h3>Expertise in Every Niche and Depth Over Breadth</h3>
                    <small>
                      {`  Our team of expert advisors boasts a wealth of expertise
                    across a broad range of financial areas. We believe in depth
                    over breadth, focusing our resources on providing targeted,
                    specialized advice tailored to your unique needs. Whether
                    you're looking for investment advice, retirement planning
                    strategies, or guidance on trusts and estates, we have the
                    expertise to help you achieve your goals.`}
                    </small>
                  </div>

                  <div className="col-md-4 apart-card">
                    <h3>Transparent Fees and Commitment</h3>
                    <small>
                      {`We believe that clarity and transparency are essential
                    components of any successful relationship. That's why we're
                    committed to offering transparent fees and keeping you
                    informed about the costs involved in our services. We are
                    dedicated to building long-term relationships with our
                    clients that are founded on mutual trust, respect, and
                    commitment.`}
                    </small>
                  </div>

                  <div className="col-md-4 apart-card">
                    <h3>A Fiduciary Approach and Your Dreams</h3>
                    <small>
                      {`Our commitment to a fiduciary approach means that we always
                    put our clients' interests first. We prioritize your needs,
                    goals, and objectives above all else, ensuring that you
                    always receive objective, independent advice that is
                    tailored to your unique situation. You can trust us to act
                    in your best interests in all situations, helping you to
                    achieve your financial goals with confidence.`}
                    </small>
                  </div>
                </CardSlider>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        <div className="comprehensive-services">
          <Comprehensive
            title="Different Needs, Different Plans"
            subtitle="We customize our wealth offering to the objectives of you and your family"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
