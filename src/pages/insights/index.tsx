import AnimatedWrapper from "@/common/animate/animateWrapper";
import Layout from "@/components/Layout";
import BlogCard from "@/components/blog/blogcard";
import MetaTags from "@/components/meta-tags";
import Subscribe from "@/components/subscribe/subscribe";
import { blogs } from "@/constant/blogs";
import Filter from "@/svgs/filter";
import React from "react";

const Insights = () => {
  return (
    <Layout>
      <MetaTags title="Insights" description="Insights" />

      <div className="insights">
        <div className="insight-hero">
          <div className="insight-heading">
            <AnimatedWrapper>
              <h1>Insights</h1>
            </AnimatedWrapper>
            {/* <div className="dash"></div> */}
          </div>

          <AnimatedWrapper delay="300">
            <p>
              Read some of our perspectives into the key issues for you and your
              wealth.
            </p>
          </AnimatedWrapper>
        </div>

        <div className="container filter">
          <div className="filter-box">
            Filter By Topics
            <Filter />
          </div>
        </div>

        <div className="container blogs">
          <AnimatedWrapper>
            <div className="row">
              {blogs.map((item, index) => {
                return <BlogCard key={index} {...item} />;
              })}
            </div>
          </AnimatedWrapper>
        </div>

        <Subscribe />
      </div>
    </Layout>
  );
};

export default Insights;
