import React from 'react'
import { Link } from "gatsby"
import navStyles from '../../components/Nav/navStyles.scss'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import logo from '../../images/logo.png'

const Menu2 = () => {


    return (
        
        <navStyles class="menu" >
            <div class="navbar">
                <div class="logo">
                <li><Link  to="/" style={{color:"gray"}}>G.A.M MARCENARIA </Link></li>
                </div>
                <div class="menu">
                    <ul>
                        <li><Link to="/gallery" activeStyle={{ color: "white" }}activeClassName="active">PORTIFÓLIO</Link></li>
                        <li><Link to="/contact" activeStyle={{ color: "white" }}activeClassName="active">CONTATO</Link></li>
                    </ul>
                </div>
            </div>
        </navStyles>
    )
}

export default Menu2