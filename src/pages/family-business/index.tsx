import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/common/hero-section/hero-section";
import Comprehensive from "@/components/comprehensive";
import Blog from "@/components/blog/blog";
import Subscribe from "@/components/subscribe/subscribe";
import MetaTags from "@/components/meta-tags";
import AnimatedWrapper from "@/common/animate/animateWrapper";
import { useRouter } from "next/router";

const FamilyBusiness = () => {
  const router = useRouter();
  return (
    <Layout>
      <MetaTags
        title="Families and Family Businesses"
        description="Families and Family Businesses"
      />
      <div className="ultra-high">
        <HeroSection
          title="Families and Family Businesses"
          content="Individuals, families, and family businesses seeking expertise, clarity, and personalised strategies to grow and protect their wealth."
          image="/images/family-business.svg"
          showbutton={true}
        />

        <div className="content-section">
          <div className="container content-container">
            <AnimatedWrapper>
              <div className="row">
                <div className="col-12 col-md-7 col-left">
                  <p>
                    WealthHat understands the vital role that family businesses
                    play in both wealth creation and preservation. We specialize
                    in providing tailored financial solutions to families and
                    family businesses, addressing their unique challenges and
                    needs.
                  </p>

                  <div className="mb-3">
                    <h3>
                      Understanding Their Unique Challenges and Circumstances
                    </h3>
                    <p>
                      Family businesses often possess a diverse range of assets,
                      including significant holdings in publicly traded
                      companies, private investment firms, family foundations,
                      and family offices. These businesses frequently operate
                      across multiple regions, leading to complex tax, legal,
                      and regulatory considerations. The evolving landscape of
                      investment trends, changing operational practices, and the
                      dynamic nature of family enterprises further add to the
                      complexity.
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3>Identifying Their Needs</h3>
                    <p>
                      Families and family businesses require financial
                      strategies that go beyond the standard. They seek
                      solutions that not only facilitate wealth growth but also
                      ensure its long-term preservation. Optimization of tax
                      efficiency, succession planning, and managing intricate
                      financial portfolios are primary concerns. Family
                      businesses may also require guidance on expansion,
                      diversification, and wealth transfer to the next
                      generation.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-5 col-right">
                  <div>
                    <h3>How WealthHat Understands and Meets Their Needs</h3>
                    <p>
                      WealthHat has a proven track record of assisting families
                      and family businesses facing similar challenges. Our team
                      comprises experts with diverse backgrounds, including
                      capital markets, investment banking, portfolio management,
                      wealth structuring, and family office management. We
                      seamlessly merge institutional resources with personalized
                      service to provide solutions aligned with the unique needs
                      of family businesses.
                    </p>

                    <p>
                      We offer a comprehensive suite of services tailored to
                      empower family businesses, including wealth preservation
                      strategies, institutionally-backed investment
                      opportunities, succession planning guidance, and expert
                      advice on managing complex financial portfolios. Our
                      institutional-level analytics, actionable strategies, and
                      best practices ensure the prudent management of family
                      assets and business interests.
                    </p>

                    <p>
                      {`We invite you to connect with us at WealthHat, where we
                      can collaborate to create a customized financial plan
                      designed to address the specific needs of your family
                      business. Your business's financial success and continuity
                      are our top priorities, and we're committed to helping you
                      achieve them.`}
                    </p>

                    <button onClick={() => router.push("/schedule-a-call")}>
                      Schedule a call
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>

        <div className="comprehensive-services">
          <Comprehensive
            title="Comprehensive services for your wealth"
            subtitle="We serve institutional and individual investors by building strong
        businesses"
          />
        </div>

        <Blog />

        <Subscribe />
      </div>
    </Layout>
  );
};

export default FamilyBusiness;
