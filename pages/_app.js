import React from "react";
import Head from "next/head";
import { PageCenter } from "components/Center";
import Header from "components/Header";
import "styles/index.css";

const MyApp = ({ Component, pageProps: completeProps }) => {
  const { _app: appProps = {}, ...pageProps } = completeProps;
  const { center = true } = appProps;
  return (
    <React.Fragment>
      <Head>
        <title>Andrew Stebenné</title>
        <meta
          property="og:title"
          content="acstb.name - Andrew Stebenné's Personal Website"
          key="title"
        />
        <meta property="og:image" content="/images/acstb.webp" key="og:image" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:site_name" content="acstb.name" key="og:site_name" />
        <meta name="author" content="Andrew Stebenné" key="author" />
        <meta
          name="description"
          content="I'm a Web developer, and this is my blog. You can get in touch with me here, or find links to my other social media profiles."
          key="description"
        />
        <meta name="color-scheme" content="dark light" key="color-scheme" />
        <meta name="theme-color" content="#2F3636" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
        <link
          rel="webmention"
          href="https://webmention.io/acstb.name/webmention"
          key="webmention"
        />
        <link
          rel="pingback"
          href="https://webmention.io/acstb.name/xmlrpc"
          key="pingback"
        />
      </Head>
      <Header />
      {center ? (
        <PageCenter id="page-root">
          <Component {...pageProps} />
        </PageCenter>
      ) : (
        <Component {...pageProps} />
      )}
    </React.Fragment>
  );
};

export default MyApp;
