import React, { PureComponent } from 'react'
import Error from 'pages/_error'

export default Component => {
  return class extends PureComponent {
    static async getInitialProps(appContext) {
      let appProps = {}
      if (typeof Component.getInitialProps === 'function') {
        appProps = await Component.getInitialProps(appContext)
      }
      return appProps
    }

    render() {
      return this.props.statusCode ? <Error statusCode={this.props.statusCode} /> : <Component {...this.props} />
    }
  }
}
