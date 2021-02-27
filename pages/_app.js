import { Fragment } from 'react'
import PropTypes from 'prop-types'
import 'styles/index.css'

function MyApp ({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />

      <footer data-role="reference">
        <div data-bg="peat" data-tc="nowhere">
          peat
        </div>
        <div data-bg="moss" data-tc="nowhere">
          moss
        </div>
        <div data-bg="twilight" data-tc="nowhere">
          twilight
        </div>
        <div data-bg="stream" data-tc="nowhere">
          stream
        </div>
        <div data-bg="nowhere" data-tc="moss">
          nowhere
        </div>
      </footer>
    </Fragment>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.Component,
  pageProps: PropTypes.Object
}
