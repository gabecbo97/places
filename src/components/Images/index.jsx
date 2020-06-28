import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {
    const { foto01,foto02,foto03 } = useStaticQuery(graphql`
query {
    foto01: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
     
        fluid(maxWidth: 1300, maxHeight: 1300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    foto02: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
       
          fluid(maxWidth: 1300, maxHeight: 1300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto03: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
       
          fluid(maxWidth: 1300, maxHeight: 1300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`)
    return(
        <>
        {(() => {
            switch (props.name){
                case 'image1':
                    return <Img fluid={foto01.childImageSharp.fluid} alt="foto01"/>
                    case 'image2':
                        return <Img fluid={foto02.childImageSharp.fluid} alt="foto02"/>
                        case 'image3':
                            return <Img fluid={foto03.childImageSharp.fluid} alt="foto03"/>
                            
                    default: return null;

              
            }
        })()}

</>
    )
}

export default Image