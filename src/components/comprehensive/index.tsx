import AnimatedWrapper from "@/common/animate/animateWrapper";
import ServiceCard from "@/common/service-card/service-card";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const Comprehensive = (props: Props) => {
  return (
    <div className="container comprehensive">
      <AnimatedWrapper>
        <h1>{props.title}</h1>
      </AnimatedWrapper>

      <AnimatedWrapper delay="300">
        <p>{props.subtitle}</p>
      </AnimatedWrapper>

      <div className="comprehensive-center">
        <div className="row">
          <div className="col-lg-6 col-12 comprehensive-left">
            <AnimatedWrapper delay="300">
              <ServiceCard
                title="One-Time Customised Plan"
                content="We offer a one-time customized investment plans and comprehensive financial plans designed individuals, families, and businesses. We assess your goals and risks tolerance to craft a plan you can implement independently, Ideal for those with less complex financial circumstances and those not seeking ongoing support."
                color="light"
                more={true}
              />
            </AnimatedWrapper>
          </div>

          <div className="col-lg-6 col-12 comprehensive-right">
            <AnimatedWrapper delay="500">
              <ServiceCard
                title="Premium Wealth Retainer Plan"
                content="Our Premium Wealth Retainer Plan is an ongoing advisory solution for High Net Worth Individuals, families, and business owners seeking ongoing wealth advisory and financial planning. It offers personalized strategies for investment management, tax planning, and insurance advisory and more, all backed by our team of seasoned advisors."
                color="dark"
                more={true}
              />
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
