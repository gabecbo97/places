import React from 'react'
import * as Styled from '../styles/pages/contactStyles'
import Layout from '../components/Layout'
import SEO from "../components/seo"



const Contact = () => {
    const text = 'lorem ipsum dolor sit amet consectetur'
    
    return(
        (
            <Layout> 
              <SEO
              title="Contact"
              />
          
          <div className="container">
      <div className="row">
        <div className="col-12 py-4 mb-3">
        <h1>Contact</h1>
        <p>{text}</p>
        </div>
       <div className="col-md-6 ">
       <form>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputName" placeholder="Name"/>
          </div>
          <div className="form-group">
            
            <input type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail"/>
          </div>
          <div className="form-group">
            
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="TextArea"></textarea>
          </div>
          
          <button type="submit" className="btn btn-success mt-3">Send</button>
      </form>
         </div>

         <div className="col-md-6 ">
       <ul class="list-group">
           <li class="list-group-item"> <Styled.EmailWrapper  danger
           />gabriel@gabeoliveira.dev
          </li>

          <li class="list-group-item"> <Styled.PhoneWrapper  danger/>
          Phone
         </li>
       
      </ul>
       </div>
        </div>
      </div>
 
            
            
            </Layout>
            
            )
    )
}

export default Contact