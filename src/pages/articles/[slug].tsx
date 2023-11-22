import Layout from "@/components/Layout";
import Blog from "@/components/blog/blog";
import MetaTags from "@/components/meta-tags";
import Subscribe from "@/components/subscribe/subscribe";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LinkedIn from "@/svgs/linkedin";
import Twitter from "@/svgs/twitter";
import Facebook from "@/svgs/facebook";
import Instagram from "@/svgs/instagram";
import GoBack from "@/common/go-back";
import { useRouter } from "next/router";
import { blogs } from "@/constant/blogs";
import DownloadArticle from "@/common/download";
import { PDFDownloadLink } from "@react-pdf/renderer";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const BlogDetails = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const { slug } = router.query;
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const res = blogs.find((item) => item.one.title === slug);
    setBlog(res);
  }, [slug]);

  const redirectUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/articles/${slug}`;

  //
  return (
    <Layout>
      <MetaTags title="Article" description="Read Article" />
      <div className="article">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 article-left">
              <AnimatedWrapper>
                <div className="d-flex align-items-center gap-3 mb-2">
                  <GoBack />
                  <p>{blog?.date}</p>

                  <p>{blog?.time}</p>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper delay="300">
                <h1>{blog?.one?.title}</h1>
              </AnimatedWrapper>

              {/* <div className="hero-footer gap-4">
                <small>Samuel BABAJIDE </small>
                <span>CHIEF INVESTMENT STRATEGIST AND CHIEF ECONOMIST </span>
              </div> */}
            </div>

            <div className="col-lg-6 article-right">
              <AnimatedWrapper delay="400">
                <Image
                  src="/images/article-hero.svg"
                  alt="hero"
                  width={100}
                  height={100}
                />
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>

      <div className="summary">
        <div className="container">
          <div className="row">
            <div className="summary-box">
              <h2>Summary</h2>
              <p>{blog?.one?.content}</p>

              <h2>{blog?.two?.title}</h2>
              <p>{blog?.two?.content}</p>

              <h2>{blog?.three?.title}</h2>
              <p>{blog?.three?.content}</p>

              <h2>{blog?.four?.title}</h2>
              <p>{blog?.four?.content}</p>

              <h2>{blog?.five?.title}</h2>
              <p>{blog?.five?.content}</p>

              <h2>{blog?.six?.title}</h2>
              <p>{blog?.six?.content}</p>

              <h2>{blog?.seven?.title}</h2>
              <p>{blog?.seven?.content}</p>

              <div className="download-box">
                <div className="download-box-left">
                  <small>{blog?.one?.title}</small>
                </div>

                <div className="download-box-right">
                  {blog && (
                    <PDFDownloadLink
                      document={<DownloadArticle blog={blog} />}
                      fileName={blog?.one?.title + ".pdf"}
                      className="button"
                    >
                      {() => (
                        <Image
                          src="/images/download-image.svg"
                          alt="hero"
                          width={100}
                          height={100}
                        />
                      )}
                    </PDFDownloadLink>
                  )}
                </div>
              </div>

              <div className="share-box">
                <small>Share this article : </small>
                <div className="social-box">
                  <LinkedIn url={redirectUrl} />
                  <Twitter url={redirectUrl} />
                  <Facebook url={redirectUrl} />
                  {/* <Instagram url={redirectUrl}/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
      <Subscribe />
    </Layout>
  );
};

export default BlogDetails;
