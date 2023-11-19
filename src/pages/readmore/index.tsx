import React from "react";
import NewsCard from "@/common/news-card";
import Layout from "@/components/Layout";
import MetaTags from "@/components/meta-tags";
import GoBack from "@/common/go-back";
import { useRouter } from "next/router";

const ReadMore = () => {
  const router = useRouter()
  const {title, content} = router.query
  return (
    <Layout>
      <MetaTags title="News and Events" description="News and Events" />

      <div className="news-details">
        <div className="container">
          
            <GoBack />
          <h1>
            {title}
          </h1>
          <p>
{content}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ReadMore;
