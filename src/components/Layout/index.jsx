
import GlobalStyles from '../../styles/globalStyles'
import React from "react"
import PropTypes from "prop-types"
import Menu from '../Menu'
import Footer from '../Footer'
import Menu2 from '../Nav'


import "./layout.scss"

const Layout = ({ children }) => {
  

  return (
    <>
    <GlobalStyles />
    <Menu2 />
             <main>{children}</main>
    <Footer />
       </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
