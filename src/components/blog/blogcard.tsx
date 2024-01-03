import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const BlogCard = (props) => {
  const router = useRouter();

  //
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
      onClick={() => router.push(`/articles/${props.one.title}`)}
    >
      <div className="blog-card">
        <div className="blog-image">
          <Image src="/images/blog1.svg" alt="" width={100} height={100} />
          <div className="tag">Financial Planning</div>
        </div>
        <div className="blog-content">
          <h1 className="blog-heading">{props.one.title}</h1>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
