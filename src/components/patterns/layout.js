import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Header } from '.'

import '../../style/index.css'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </footer> */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
