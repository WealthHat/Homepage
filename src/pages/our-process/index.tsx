import React from "react";
import Layout from "@/components/Layout";
import ClientCard from "@/common/client-card/client-card";
import HeroSection from "@/common/hero-section/hero-section";
import MetaTags from "@/components/meta-tags";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const OurProcess = () => {
  return (
    <Layout>
      <MetaTags title="Our Process" description="Our Process" />
      <div className="our-process">
        <HeroSection
          title="Our Process"
          content="Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth."
          image="/images/our-process.svg"
          showbutton={true}
        />

        <div className="approach">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 approach-left">
                <AnimatedWrapper>
                  <div>
                    <h1>WealthHat</h1>
                    <h2>Approach</h2>
                  </div>
                </AnimatedWrapper>
              </div>

              <div className="col-12 col-md-6 approach-right">
                <AnimatedWrapper>
                  <p>
                    The WealthHat Approach is the framework for how we work with
                    our clients.
                  </p>
                </AnimatedWrapper>

                <AnimatedWrapper delay="300">
                  <p>
                    {` It was designed with you in mind, it prioritizes
                  accountability from us, and it reinforces positive financial
                  habits in our client's lives.`}
                  </p>
                </AnimatedWrapper>
              </div>
            </div>

            <AnimatedWrapper>
              <div className="timeline">
                <div className="timeline-box right">
                  <div className="content">
                    <small>Step one</small>
                    <h2>Get to Know</h2>
                    <p>
                      A quick meeting to find out if working together makes
                      sense.
                    </p>
                    <p>
                      {`The goal with this meeting is to get to know you, your
                    situation, and what you're looking for in a financial
                    planning relationship. We then share how we work with our
                    clients so you can leave this meeting knowing if we're the
                    right fit.`}
                    </p>

                    <div className="time">
                      Time before next meeting: 3 days to 2+ weeks
                    </div>
                  </div>
                </div>

                <div className="timeline-box left">
                  <div className="content">
                    <small>Step two</small>
                    <h2>Get to Know</h2>
                    <p>
                      A quick meeting to find out if working together makes
                      sense.
                    </p>
                    <p>
                      {` The goal with this meeting is to get to know you, your
                    situation, and what you're looking for in a financial
                    planning relationship. We then share how we work with our
                    clients so you can leave this meeting knowing if we're the
                    right fit.`}
                    </p>

                    <div className="time">
                      Time before next meeting: 3 days to 2+ weeks
                    </div>
                  </div>
                </div>

                <div className="timeline-box right">
                  <div className="content">
                    <small>Step three</small>
                    <h2>Get to Know</h2>
                    <p>
                      A quick meeting to find out if working together makes
                      sense.
                    </p>
                    <p>
                      {`The goal with this meeting is to get to know you, your
                    situation, and what you're looking for in a financial
                    planning relationship. We then share how we work with our
                    clients so you can leave this meeting knowing if we're the
                    right fit.`}
                    </p>

                    <div className="time">
                      Time before next meeting: 3 days to 2+ weeks
                    </div>
                  </div>
                </div>

                <div className="timeline-box left">
                  <div className="content">
                    <small>Step four</small>
                    <h2>Get to Know</h2>
                    <p>
                      A quick meeting to find out if working together makes
                      sense.
                    </p>
                    <p>
                      {`The goal with this meeting is to get to know you, your
                    situation, and what you're looking for in a financial
                    planning relationship. We then share how we work with our
                    clients so you can leave this meeting knowing if we're the
                    right fit.`}
                    </p>

                    <div className="time">
                      Time before next meeting: 3 days to 2+ weeks
                    </div>
                  </div>
                </div>

                <div className="timeline-box right">
                  <div className="content">
                    <small>Step five</small>
                    <h2>Get to Know</h2>
                    <p>
                      A quick meeting to find out if working together makes
                      sense.
                    </p>
                    <p>
                      {` The goal with this meeting is to get to know you, your
                    situation, and what you're looking for in a financial
                    planning relationship. We then share how we work with our
                    clients so you can leave this meeting knowing if we're the
                    right fit.`}
                    </p>

                    <div className="time">
                      Time before next meeting: 3 days to 2+ weeks
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurProcess;
