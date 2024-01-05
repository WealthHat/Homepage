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
          <div className="switch-left">
            Investment Advisory Retainer Plan
          </div>

          <div className="switch-right active">
            Comprehensive Wealth Advisory Retainer Plan
          </div>
        </div>

        <div className="content">
          <div className="container">
            <AnimatedWrapper>
              <p>
                The Comprehensive Wealth Advisory Retainer Plan is meticulously
                designed for individuals, families, and businesses who seek an
                all-encompassing approach to wealth management. This plan offers
                continuous access to our expert advisors, ensuring that all
                aspects of your financial life are harmoniously aligned with
                your long-term objectives. Going beyond mere investment
                management, this plan encompasses a holistic strategy that
                addresses your entire financial picture, from estate planning to
                tax optimization and beyond. The Comprehensive Wealth Advisory
                Retainer Plan is ideal for those seeking a holistic approach to
                managing their wealth, with the assurance of ongoing expert
                support. Rest easy knowing that every aspect of your financial
                life is expertly managed by our team.{" "}
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
                      content="Our team will diligently monitor and manage your investment portfolio, ensuring it remains in sync with your financial goals and risk tolerance."
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
                      content="Periodic reviews of your portfolio's performance will be conducted, with the aim of providing actionable insights and recommendations to optimize your investments."
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
                      content="You will have direct access to our advisors who are ready to answer your queries, share valuable insights, and provide expert advice to assist you in making informed financial decisions."
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
                      content="Employing strategic risk management practices, we work to mitigate potential losses and enhance your portfolio's overall performance. This includes regular market condition assessments, diversification strategies, and continuous monitoring of your investment positions in line with your risk tolerance and financial objectives.."
                      color="light"
                      more={false}
                      height="350px"
                    />
                  </AnimatedWrapper>
                </div>
                <div className="col-4 columns">
                  <AnimatedWrapper delay="300">
                    <ServiceCard
                      title="Holistic Financial Planning"
                      content=" Beyond investment management, our team will assist you in developing a comprehensive financial strategy that incorporates estate planning, tax optimization, retirement planning, and other vital aspects of your financial life."
                      color="light"
                      more={false}
                      height="350px"
                    />
                  </AnimatedWrapper>
                </div>
                <div className="col-4 columns">
                  <AnimatedWrapper delay="300">
                    <ServiceCard
                      title="Personalised Strategy"
                      content="Our advisors collaborate with you to formulate a personalized strategy, taking into account your financial objectives, risk tolerance, and time horizon."
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
