import AnimatedWrapper from "@/common/animate/animateWrapper";
import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-5 col-md-6 bg">
            <AnimatedWrapper delay="500">
              <div className="form-box">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email@email.com" />
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay="800">
              <div className="row mt-3">
                <div className="col-8 d-flex">
                  <p>For insights and articles</p>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                  <button>OK</button>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
