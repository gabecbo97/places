import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Card from '../components/Card'



import Search from '../components/Search'

const IndexPage = () => (

  <Layout >
    <SEO title="" 
    description="Welcome"/>
 
  <div className="container-fluid" id="banner">
    <div className="container" >
      <div className="row">
      
        <div className="col-12 py-4 text-center">
          
        <h1 className="text-title"> Find Your <strong>Perfect Place.</strong></h1>
           <Search />
        </div>
      </div>
     
    </div>
    
    </div>
   
<div className="container-flui" id="cards">
      <Card />
           </div>
    </Layout>
)

export default IndexPage
