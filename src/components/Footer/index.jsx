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
              github,
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
            github
          }
          copyright
        }
      }
    }
  `)


    return (
     <div className="bg-dark">
         <div className="container">
             <div className="row text-white py-4 mt-0">
                 <div className="col-md-6 mb-3 ">
                     {description}
                 </div>
                 <div className="col-md-6 d-flex justify-content-center justify-content-md-end aling-items-center ">
                    
                   

                         <a href={github} target="_blank" rel="nopener noreferrer">
                         <Styled.GitIcon/>
                         
                         </a>
                         
                     
                     
                 </div>
                 
             </div>

         </div>
         <div className="container-fluid">
           <div className="row bg-gray-dark text-white py-3">
                  <div className="col-12 d-flex justify-content-center">
                     {copyright}
                 </div>

           </div>
         </div>
     </div>
    )
}

export default Footer