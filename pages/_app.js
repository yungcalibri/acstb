import PropTypes from 'prop-types'
import '../styles/index.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.Component,
  pageProps: PropTypes.Object
}
