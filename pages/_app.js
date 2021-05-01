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
        <meta property="og:image" content="/images/acstb.webp" />
        <meta name="author" content="Andrew Stebenné" key="author" />
        <meta
          name="description"
          content="I'm a Web developer, and this is my blog. You can get in touch with me here, or find links to my other social media profiles."
          key="description"
        />
        <meta name="color-scheme" content="dark light" />
        <link
          rel="webmention"
          href="https://webmention.io/acstb.name/webmention"
        />
        <link rel="pingback" href="https://webmention.io/acstb.name/xmlrpc" />
      </Head>
      <Header />
      {center ? (
        <PageCenter>
          <Component {...pageProps} />
        </PageCenter>
      ) : (
        <Component {...pageProps} />
      )}
    </React.Fragment>
  );
};

export default MyApp;
