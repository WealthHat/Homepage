import AnimatedWrapper from "@/common/animate/animateWrapper";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <AnimatedWrapper>
            <h1>
              Wealth Advisors to successful Individuals, Families & Businesses
            </h1>
          </AnimatedWrapper>
          <AnimatedWrapper delay="500">
            <p>
              Our clients always come first. We take a distinctive, fiduciary
              approach to serving our unique clients and their loved ones.
            </p>
          </AnimatedWrapper>
        </div>
      </div>

      <div className="hero-right">
        <Image src="/images/hero-image.svg" alt="" width={100} height={100} />
      </div>
    </div>
  );
};

export default Hero;
