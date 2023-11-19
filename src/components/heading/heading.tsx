import AnimatedWrapper from "@/common/animate/animateWrapper";
import React from "react";

type Interface = {
  title?: string;
  subtitle?: string;
  content?: string;
};

const Heading = ({ title, subtitle, content }: Interface) => {
  return (
    <div className="heading">
      <AnimatedWrapper>
        <div className="dash"></div>
      </AnimatedWrapper>

      <AnimatedWrapper delay="500">
        <small>{title}</small>
      </AnimatedWrapper>

      <AnimatedWrapper delay="800">
        <h1>{subtitle}</h1>
      </AnimatedWrapper>

      <AnimatedWrapper delay="800">
        <p>{content}</p>
      </AnimatedWrapper>
    </div>
  );
};

export default Heading;
