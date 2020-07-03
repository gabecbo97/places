import React from 'react'
import { Link } from "gatsby"
import navStyles from '../../components/Nav/navStyles.scss'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import logo from '../../images/you_place.png'

const Menu2 = () => {

    return (

        
        <navStyles className="mb-1 navbar navbar-expand-lg navbar-dark info-color md-padding-0" id="menu">

        <Link className="navbar-brand" to="/"><img src={logo} alt=""/> </Link>
        <button id="mobile" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">
                <i className="fab fa-facebook-f">Services</i> 
                <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">
                <i className="fab fa-facebook-f">About</i> 
                <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">
                <i className="fab fa-facebook-f">Feature</i> 
                <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/places">
                <i className="fab fa-instagram">Apartments</i> </Link>
            </li>
            <li className="nav-item login">
                <a className="nav-link" href="#">
                <i className="fab fa-instagram login " style={{color:"white"}}>SING IN</i> </a>
            </li>
            
            </ul>
        </div>
        </navStyles >

        
        
    )
}

export default Menu2