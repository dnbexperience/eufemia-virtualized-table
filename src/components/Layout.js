import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import cssVars from 'css-vars-ponyfill'

// 1. Custom Eufemia import, instead of effecting the body reset with 'dnb-ui-lib/style'
import 'dnb-ui-lib/style' // Import the global DNB stylesheet
// import 'dnb-ui-lib/style/basis'
// import 'dnb-ui-lib/style/components'
// import 'dnb-ui-lib/style/themes/ui'

// This polyfill is only needed if we use Styled Components (CSS-in-JS) syntax
cssVars()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div className="dnb-core-style">
        <main>{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
