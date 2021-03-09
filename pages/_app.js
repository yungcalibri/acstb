import React from "react";
import { PageCenter } from "components/Center";
import Header from "components/Header";
import "styles/index.css";

const MyApp = ({ Component, pageProps }) => (
  <React.Fragment>
    <Header />
    <PageCenter>
      <Component {...pageProps} />
    </PageCenter>
  </React.Fragment>
);

export default MyApp;
