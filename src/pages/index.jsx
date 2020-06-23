import React from "react"
import Card from '../components/Card'



import Layout from "../components/Layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Card />
   
  </Layout>
)

export default IndexPage
