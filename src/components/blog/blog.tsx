import React from "react";
import BlogCard from "./blogcard";
import AnimatedWrapper from "@/common/animate/animateWrapper";
import { blogs } from "@/constant/blogs";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <AnimatedWrapper>
          <div className="d-flex">
            <h1 className="explore">Explore insights</h1>
            <div className="dash"></div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay="300">
          <div className="row">
            {blogs.map((item, index) => {
              return <BlogCard key={index} {...item}/>;
            })}
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Blog;
