import React from "react";
import Heading from "../heading/heading";
import ClientCard from "@/common/client-card/client-card";
import ServiceCard from "@/common/service-card/service-card";
import CardSlider from "@/common/slick";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const Client = () => {
  return (
    <div className="client">
      <div className="container">
        <Heading
          title="Our client"
          content="WealthHat understands that our clients are a diverse group with unique financial needs. That’s why we take the time to carefully outline our client segments, ensuring that our services cater to their individuals requirements."
        />

        <div className=" client-center">
          <div className="row">
            <CardSlider>
              <div className="col client-box">
                <AnimatedWrapper delay="300">
                  <ServiceCard
                    title="High Net Worth & Ultra High Net Individuals"
                    content='"Tailored wealth management solutions designed specifically for individuals and families with significant assets. We understand the unique challenges and opportunities that come with substantial wealth and provide strategies to preserve and grow your assets."'
                    color="light"
                    more={true}
                    height="380px"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col client-box">
                <AnimatedWrapper delay="500">
                  <ServiceCard
                    title="Beneficiaries & Heirs"
                    content='"Guidance and support to beneficiaries and heirs to ensure seamless transition and continuation of wealth. Our experts help navigate the complexities of inheritance, trusts, and legacy planning."'
                    color="dark"
                    more={true}
                    height="380px"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col client-box">
                <AnimatedWrapper delay="700">
                  <ServiceCard
                    title="Families & Spouses"
                    content={`"Comprehensive financial planning that considers the needs of every family member. From joint investments to educational trusts, we make sure your family's financial well-being is secured"`}
                    color="light"
                    more={true}
                    height="380px"
                  />
                </AnimatedWrapper>
              </div>

              <div className="col  client-box">
                <ServiceCard
                  title="Families & Family Businesses"
                  content='"Expertise in aligning family values with business goals. We offer strategies for succession planning, risk management, and growth to ensure your family business thrives for generations."'
                  color="dark"
                  more={true}
                  height="380px"
                />
              </div>

              <div className="col client-box">
                <ServiceCard
                  title="Entrepreneurs & Founders"
                  content='"Dedicated support for business leaders, from startup phase to exit strategy. Our financial advisors help entrepreneurs optimize their personal and business wealth for maximum impact."'
                  color="light"
                  more={true}
                  height="380px"
                />
              </div>

              <div className="col client-box">
                <ServiceCard
                  title="Senior Executives"
                  content='"Customized financial planning for top-tier professionals. Our services address the unique needs of senior executives, from stock option planning to retirement strategies."'
                  color="dark"
                  more={true}
                  height="380px"
                />
              </div>
            </CardSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
