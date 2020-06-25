import React from 'react'
import * as Styled from '../styles/pages/contactStyles'
import Layout from '../components/Layout'



const Contact = () => {
    const text = 'lorem ipsum dolor sit amet consectetur'
    
    return(
        (
            <Layout> 
          
          <div className="container">
      <div className="row">
        <div className="col-12 py-4">
        <h1>Contact</h1>
        <p>{text}</p>
       <div className="col-6">

       <ul class="list-group">
        <li class="list-group-item"> <Styled.EmailWrapper  danger
        
         />E-mail</li>
       
      </ul>
       </div>
        </div>
      </div>
    </div>
            
            
            </Layout>
            
            )
    )
}

export default Contact