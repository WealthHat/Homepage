// AnimatedWrapper.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedWrapper = ({
  children,
  type = "fade-up",
  duration = 800,
  delay = "10",
}) => {
  useEffect(() => {
    AOS.init({
      duration,
    });
  }, [duration]);

  return (
    <div data-aos={type} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default AnimatedWrapper;
