import AnimatedWrapper from "@/common/animate/animateWrapper";
import HeroSection from "@/common/hero-section/hero-section";
import ServiceCard from "@/common/service-card/service-card";
import CardSlider from "@/common/slick";
import Layout from "@/components/Layout";
import MetaTags from "@/components/meta-tags";
import Image from "next/image";
import React from "react";

const OneTimeCustomisedPlan = () => {
  return (
    <Layout>
      <MetaTags
        title="One-Time Customised Plan"
        description="One-Time Customised Plan"
      />

      <div className="one-times">
        {/* onetimehero */}
        <HeroSection
          title="Premium Wealth Retainer Plan"
          content="This comprehensive plan provides continuous support and expert guidance to ensure your wealth is strategically managed, and your financial goals are achieved. With access to our team of seasoned advisors, you'll receive personalized strategies that encompass investment management, tax planning, estate planning, and more. The Premium Wealth Retainer Plan is ideal for those who want to preserve and grow their wealth while receiving the highest level of service and expertise from WealthHat."
          image="/images/one-time.svg"
          showbutton={true}
        />

        {/* note component */}
        <div className="note">
          <div className="container">
            <div className="row">
              <AnimatedWrapper>
                <h4>
                  We provide two distinct service packages for our clients:{" "}
                  <span>
                    {" "}
                    an Investment Advisory Retainer Plan and a Comprehensive
                    Wealth Advisory Retainer Plan{" "}
                  </span>
                </h4>
              </AnimatedWrapper>
            </div>
          </div>
        </div>

        <div className="switch">
          <div className="switch-left active">
            Investment Advisory Retainer Plan
          </div>

          <div className="switch-right">
            Comprehensive Wealth Advisory Retainer Plan
          </div>
        </div>

        <div className="content">
          <div className="container">
            <AnimatedWrapper>
              <p>
                The Investment Advisory Retainer Plan is designed for
                individuals, families, and businesses who require ongoing
                support and guidance in managing their investments. This plan
                offers continuous access to our expert advisors who will help
                you navigate the complexities of the investment landscape,
                ensuring your portfolio aligns with your financial objectives.
                The Investment Advisory Retainer Plan is ideal for those who
                want ongoing support in managing their investments and achieving
                their financial goals. With our team of expert advisors by your
                side, you can have peace of mind knowing that your investments
                are in good hands.{" "}
                <b>
                  Annual Fee: A percentage of assets under advisory. Please
                  refer to our pricing page for detailed information.
                </b>
              </p>
            </AnimatedWrapper>

            <div className="row mt-5">
              <CardSlider>
                <div className="col-4 columns">
                  <AnimatedWrapper>
                    <ServiceCard
                      title="Ongoing Investment Advisory"
                      content="Our team will monitor and manage your investment portfolio, making adjustments as needed to ensure it remains aligned with your financial goals and risk tolerance."
                      color="light"
                      more={false}
                      height="350px"
                    />
                  </AnimatedWrapper>
                </div>
                <div className="col-4 columns">
                  <AnimatedWrapper delay="300">
                    <ServiceCard
                      title="Regular Portfolio Reviews"
                      content="We will conduct regular reviews of your portfolio's performance, providing you with insights and recommendations to optimize your investments."
                      color="light"
                      more={false}
                      height="350px"
                    />
                  </AnimatedWrapper>
                </div>
                <div className="col-4 columns">
                  <AnimatedWrapper delay="500">
                    <ServiceCard
                      title="Expert Guidance"
                      content="Our advisors will be available to answer your questions, provide insights, and offer expert advice to help you make informed investment decisions."
                      color="light"
                      more={false}
                      height="350px"
                    />
                  </AnimatedWrapper>
                </div>
                <div className="col-4 columns">
                  <AnimatedWrapper>
                    <ServiceCard
                      title="Risk Management"
                      content="We will employs strategic risk management practices to mitigate potential losses and enhance the overall performance of your investment portfolio. This includes regular assessment of market conditions, and continuous monitoring of your investment positions."
                      color="light"
                      more={false}
                      height="350px"
                    />
                  </AnimatedWrapper>
                </div>
                <div className="col-4 columns">
                  <AnimatedWrapper delay="300">
                    <ServiceCard
                      title="Personalized Strategy"
                      content="We will work with you to develop a personalized investment strategy that takes into account your financial objectives, risk tolerance, and time horizon."
                      color="light"
                      more={false}
                      height="350px"
                    />
                  </AnimatedWrapper>
                </div>
              </CardSlider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OneTimeCustomisedPlan;
