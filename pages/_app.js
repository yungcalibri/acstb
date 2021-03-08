import React from 'react'
import Header from 'components/Header'
import 'styles/index.css'

const MyApp = ({ Component, pageProps }) => (
  <React.Fragment>
    <Header />
    <Component {...pageProps} />
  </React.Fragment>
)

export default MyApp
