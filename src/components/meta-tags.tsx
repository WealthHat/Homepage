import Head from "next/head";
import React from "react";

const MetaTags = (props: any) => {
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
      <title>WealthHat - {props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta name="keywords" content="WealthHat Investments investment" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />

      <meta
        property="og:image"
        content="https://res.cloudinary.com/wealthhat/image/upload/v1696177976/Group_34817_vk7zh6.png"
      />
      <meta property="og:type" content="website" />

      <meta property="og:url" content={process.env.NEXT_PUBLIC_CLIENT_URL} />
      <meta name="twitter:card" content="WealthHat" />

      <meta name="robots" content="index, nofollow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="WealthHat" />

      <meta property="og:site_name" content="WealthHat" />
      <meta name="twitter:image:alt" content="WealthHat" />
    </Head>
  );
};

export default MetaTags;
