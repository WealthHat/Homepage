import React from "react";
import Layout from "@/components/Layout";
import PriceCard from "@/common/price-card";
import HeroSection from "@/common/hero-section/hero-section";
import MetaTags from "@/components/meta-tags";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const OurPricing = () => {
  //
  return (
    <Layout>
      <MetaTags title="Our Pricing" description="Our Pricing " />
      <div className="our-pricing">
        <HeroSection
          title="Our Pricing"
          content="Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth."
          image="/images/about-hero.svg"
          showbutton={true}
        />

        <div className="price">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                <AnimatedWrapper>
                  <PriceCard color="light" />
                </AnimatedWrapper>
              </div>

              <div className="col-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                <AnimatedWrapper delay="300">
                  <PriceCard color="light" />
                </AnimatedWrapper>
              </div>

              <div className="col-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                <AnimatedWrapper delay="500">
                  <PriceCard color="black" />
                </AnimatedWrapper>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                <AnimatedWrapper delay="700">
                  <PriceCard color="black" />
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurPricing;
