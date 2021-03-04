import PropTypes from 'prop-types'
import 'styles/index.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.Component,
  pageProps: PropTypes.Object
}
