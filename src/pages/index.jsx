import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Images from '../components/Images'

const IndexPage = () => (

  <Layout>
    <SEO title="" 
    description="Welcome"/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Images name="image1" />
    </div>
    <div className="carousel-item">
    <Images name="image2" />
    </div>
    <div className="carousel-item">
    <Images name="image3" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
        <h1>Home</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        </div>
      </div>
    </div>
    
   
   
  </Layout>
)

export default IndexPage
