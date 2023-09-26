import Head from "next/head";
import React from "react";

const MetaTags = (props:any) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta name="keywords" content="Kawa keywords" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />

      <meta
        property="og:image"
        content="https://kawadev.s3.eu-west-2.amazonaws.com/carrier/1687964758066-Carrier%20App.png"
      />
      <meta property="og:type" content="website" />

      <meta property="og:url" content={process.env.NEXT_PUBLIC_CLIENT_URL} />
      <meta name="twitter:card" content="KAWA" />

      <meta name="robots" content="index, nofollow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="The Founders Lab" />

      <meta property="og:site_name" content="KAWA" />
      <meta name="twitter:image:alt" content="KAWA" />
    </Head>
  );
};

export default MetaTags;
