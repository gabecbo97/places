import React from 'react'
import { Link } from "gatsby"
import navStyles from '../../components/Nav/navStyles.scss'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import logo from '../../images/you_place.png'

const Menu2 = () => {


    return (
        
        <navStyles class="menu" >
            <div class="navbar">
                <div class="logo">
                <li><Link  to="/" style={{color:"gray"}}> <img src={logo} alt=""/></Link></li>
                </div>
                <div class="menu">
                    <ul>
                        <li><Link to="" activeStyle={{ color: "#A1BDFD" }}activeClassName="active">Services</Link></li>
                        <li><Link to="" activeStyle={{ color: "#A1BDFD" }}activeClassName="active">About</Link></li>
                        <li><Link to="" activeStyle={{ color: "#A1BDFD" }}activeClassName="active">Features</Link></li>
                        <li><Link to="/places" activeStyle={{ color: "#A1BDFD" }}activeClassName="active">Apartaments</Link></li>
                        <li className="login"><Link to="/gallery" activeStyle={{ color: "#A1BDFD" }}activeClassName="active" style={{color:"white"}}>SING UP</Link></li>
                    </ul>
                </div>
            </div>
        </navStyles>
        
    )
}

export default Menu2