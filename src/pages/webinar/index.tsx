import HeroSection from "@/common/hero-section/hero-section";
import Layout from "@/components/Layout";
import MetaTags from "@/components/meta-tags";
import Marker from "@/svgs/marker";
import Image from "next/image";
import React from "react";

const Webinar = () => {
  return (
    <Layout>
      <MetaTags title="Webinar" description="Webinar" />
      <div className="webinars">
        <HeroSection
          title="Maximizing Returns: Unveiling Investment Strategies for Financial Success"
          content="10.00 am - 12.00pm"
          image="/images/webinar.svg"
          showbutton={false}
        />

        {/* note component */}
        <div className="note">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 note-left">
                <Image
                  src="/images/webinar-image.svg"
                  alt="hero"
                  width={100}
                  height={100}
                />
              </div>

              <div className="col-lg-7 note-right">
                <div className="note-box">
                  <div className="title">
                    <div className="dash"></div>
                    <h3>About Webinar</h3>
                  </div>

                  <p>
                    In this informative session, we will delve deep into the
                    world of investment, providing you with valuable insights
                    and expert guidance to help you make informed financial
                    decisions. Whether you're a seasoned investor or just
                    starting on your investment journey, our panel of seasoned
                    financial experts will share proven strategies, tips, and
                    tricks to optimize your returns and secure your financial
                    future.
                  </p>

                  <button>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Webinar;
