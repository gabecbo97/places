import React from 'react'
import * as Styled from './styled'
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const  {
        site: {
          siteMetadata: {
            description,
            socialMedia: {
              facebook,
              instagram,
            },
            copyright
          }
        }
      } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          socialMedia {
            facebook
            instagram
          }
          copyright
        }
      }
    }
  `)


    return (
     <div className="bg-dark">
         <div className="container">
             <div className="row text-white py-4 mt-5">
                 <div className="col-6">
                     {description}
                 </div>
                 <div className="col-6 d-flex justify-content-center aling-items-center">
                     <a href={facebook} target="_blank" rel="nopener noreferrer">
                     <Styled.FacebookIccon/>
                     </a>
                     <a href={instagram} target="_blank" rel="nopener noreferrer">
                         <Styled.InstagramIcon/>
                         </a>
                     
                     
                 </div>
                 <div className="col-12 d-flex justify-content-center">
                     {copyright}
                 </div>
             </div>

         </div>
     </div>
    )
}

export default Footer