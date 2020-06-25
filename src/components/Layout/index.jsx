
import GlobalStyles from '../../styles/globalStyles'
import React from "react"
import PropTypes from "prop-types"
import Menu from '../Menu'



import "./layout.scss"

const Layout = ({ children }) => {
  

  return (
    <>
    <GlobalStyles />
    <Menu />
     
        <main>{children}</main>
   
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
