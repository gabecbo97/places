import React from 'react'
import * as Styled from '../Card/style.scss' 
import image1 from '../../images/build.svg'
import image2 from '../../images/passport.svg'
import image3 from '../../images/real.svg'
import { Link } from "gatsby"



const Card = () => {
    return(
        <div className="container-fluid">

<div className="container"  >
        <div className="row">
            <div className="col-12 py-4">
                
                <h1 className="text-center">Our Services </h1>
                <p className="text-center"> When it comes and properties, we´re here every step pf the way </p>
             </div>
             </div>
             
            <div className="container">
                <div className="row">
               
                   <div className="col-lg-4 mb-3" id="item" >
                        <div className="card" >
                        
                        <img src={image1} className="card-img-top" alt="..."/>
                        
                        <div className="card-body text-center">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" class="btn btn-button ">Read more</Link>
                        </div>
                    </div>
                    </div>
            <div className="col-lg-4 mb-3" id="item">
            <div className="card" >
                    
                    <img src={image2} className="card-img-top" alt="..."/>
                    
                    <div className="card-body text-center" >
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" class="btn btn-button ">Read more</Link>
                    </div>
            </div>
       </div>
       <div className="col-lg-4 mb-3" id="item">
                <div className="card" >
            
                    <img src={image3} className="card-img-top" alt="..."/>
                    
                    <div className="card-body text-center">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" class="btn btn-button">Read more</Link>
                    </div>
                </div>
             </div>
          
       </div>
  
       </div>
   </div>
   </div>
        
    )
}

export default Card