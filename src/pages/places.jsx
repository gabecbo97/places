import React from 'react'
import Layout from '../components/Layout'
import dubai from '../images/dubai.svg'
import san from '../images/san_francisco.svg'
import paris from '../images/paris.svg'
import roma from '../images/roma.svg'
import * as Styles from '../styles/pages/placesStyles.scss'
import { Link } from 'gatsby'

const Places = () => {
    return(

        <Layout>

  
           <div className="container-fluid">
               <div className="container .col-md-2">
                    <div class="row places">
                    <div class="col-sm-8">

                    <img src={dubai} alt="" />
                    </div>
                            <div class="col-sm-4 ">
                                <h1>
                                    Real Estate Made Easy.
                                </h1>
                                <p>Lorem, ipsum dolor sit 
                                    amet consectetur adipisicing 
                                    elit. Laborum, atque ducimus, 
                                    animi debitis eaque sed, cum 
                                    consequuntur aperiam quod 
                                    voluptatibus est? Ipsam alias 
                                    dicta optio maxime atque 
                                    blanditiis adipisci voluptatem!</p>
                                    <p><Link to="#" class="btn btn-button place ">Read more</Link></p>
                            </div>
                            
                    </div>
                    <div class="row places">
                            <div class="col-sm-4">
                                <h1>
                                    Real Estate Made Easy.
                                </h1>
                                <p>Lorem, ipsum dolor sit 
                                    amet consectetur adipisicing 
                                    elit. Laborum, atque ducimus, 
                                    animi debitis eaque sed, cum 
                                    consequuntur aperiam quod 
                                    voluptatibus est? Ipsam alias 
                                    dicta optio maxime atque 
                                    blanditiis adipisci voluptatem!</p>
                                    <p><Link to="#" class="btn btn-button place ">Read more</Link></p>
                            </div>
                            <div class="col-sm-8">

                                <img src={san} alt=""  align="right"/>
                            </div>
                    </div>
                    <div class="row places">
                    <div class="col-sm-8">

                            <img src={roma} alt=""/>
                            </div>
                            <div class="col-sm-4">
                                <h1>
                                    Real Estate Made Easy.
                                </h1>
                                <p>Lorem, ipsum dolor sit 
                                    amet consectetur adipisicing 
                                    elit. Laborum, atque ducimus, 
                                    animi debitis eaque sed, cum 
                                    consequuntur aperiam quod 
                                    voluptatibus est? Ipsam alias 
                                    dicta optio maxime atque 
                                    blanditiis adipisci voluptatem!</p>
                                    <p><Link to="#" class="btn btn-button place ">Read more</Link></p>

                            </div>
                            
                    </div>
                    <div class="row places">
                            <div class="col-sm-4">
                                <h1>
                                    Real Estate Made Easy.
                                </h1>
                                <p>Lorem, ipsum dolor sit 
                                    amet consectetur adipisicing 
                                    elit. Laborum, atque ducimus, 
                                    animi debitis eaque sed, cum 
                                    consequuntur aperiam quod 
                                    voluptatibus est? Ipsam alias 
                                    dicta optio maxime atque 
                                    blanditiis adipisci voluptatem!</p>
                                    <p><Link to="#" class="btn btn-button place ">Read more</Link></p>
                            </div>
                            <div class="col-sm-8">

                                <img src={paris} alt="" align="right"/>
                            </div>
                    </div>
               </div>
           </div>


        </Layout>        
       
    )
}

export default Places