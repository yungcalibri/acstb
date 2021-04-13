import React from "react";
import { PageCenter } from "components/Center";
import Header from "components/Header";
import "styles/index.css";

const MyApp = ({ Component, pageProps: completeProps }) => {
  const { _app: appProps = {}, ...pageProps } = completeProps;
  const { center = true } = appProps;
  return (
    <React.Fragment>
      <Header />
      <main>
        {center ? (
          <PageCenter>
            <Component {...pageProps} />
          </PageCenter>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </React.Fragment>
  );
};

export default MyApp;
