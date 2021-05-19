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
        <meta name="theme-color" content="#2F3636" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href="/favicon-dark.ico"
          sizes="16x16 32x32 48x48"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-light.ico"
          sizes="16x16 32x32 48x48"
          media="(prefers-color-scheme: light)"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-dark.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-light.png"
          media="(prefers-color-scheme: light)"
        />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
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
