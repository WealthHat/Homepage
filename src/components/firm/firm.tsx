import React from "react";
import Heading from "../heading/heading";
import CircleArrow from "@/svgs/circle-arrow";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const Firm = () => {
  return (
    <div className="firm">
      <Heading title="The firm" subtitle="Fiduciary. Expertise. Trust" />

      <div className="container firm-center">
        <div className="row">
          <div className="col-lg-6 col-md-6 left-firm">
            <AnimatedWrapper delay="300">
              <h2>Growing and Preserving Wealth</h2>
            </AnimatedWrapper>

            <AnimatedWrapper delay="500">
              <p>
                WealthHat is a leading wealth advisory and financial planning
                firm, with $100M+ in Assets under Advisement (AuA). With our
                unwavering commitment to precision and purpose, we specialize in
                offering comprehensive wealth advisory & financial planning
                services to high net-worth individuals, families, and
                businesses. Our extensive expertise allows us to serve our
                clients with utmost conviction.
              </p>
            </AnimatedWrapper>

            <AnimatedWrapper>
              <div className="readmore">
                <span>Read more</span>
                <CircleArrow />
              </div>
            </AnimatedWrapper>
          </div>

          <div className="col-lg-6 col-md-6 right-firm">
            <AnimatedWrapper delay="700">
              <div>
                <h1>$100M</h1>
                <h2>Assets Under Management</h2>
                <p>
                  All figures as of June 30, 2023, unless otherwise indicated.{" "}
                  <br /> *As of March 31, 2023.
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firm;
