import React from 'react'
import { Link } from "gatsby"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Menu = () => {
const { logo } = useStaticQuery(graphql`
query {
    logo: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
     
        fixed(width: 35, height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
    
return (



<nav>
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>

  <div class="nav-wrapper">
  <li><Link className="navbar-brand" to="/"><Img fixed={logo.childImageSharp.fixed} alt="logo"/> </Link></li>
    <ul class="right hide-on-med-and-down">
   <li><Link className="nav-link"  to="/about" activeStyle={{ color: "#9963BA" }} activeClassName="active">About</Link> </li> 
      <li><a href="badges.html">Components</a></li>
    
      <li><Link data-target="dropdown1" className="nav-link"  to="/gallery" activeStyle={{ color: "#9963BA" }}activeClassName="active">Gallery</Link></li>
    </ul>
  </div>
</nav>

  

            
)
}

export default Menu