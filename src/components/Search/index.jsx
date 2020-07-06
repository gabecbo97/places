import React from "react"
import { Link } from "gatsby"
import Style from '../Search/style.scss' 
import * as Styled from '../Footer/styled'


 const Search = () => {

    return (
  
      <div className="container-fluid">
        <div className="container">
        <h1 className="text-title"> Find Your <strong>Perfect Place.</strong></h1>
        <div class="wrap">
        
   <div class="search">
   
   <div class="searchButton">
        <i class="fa fa-search" ><Styled.searchIcon/></i>
     </div>
      <input type="text" class="searchTerm" placeholder="Search for a location..."/>
      
              <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Budget Range
                  </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              <button type="submit" class=" text-center searchButton-a">
        <i class="fa fa-search ">Search</i>
     </button>
    
   </div>
</div>


        </div>
      </div>
      
    )
}

export default Search