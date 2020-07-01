import React from "react"
import { Link } from "gatsby"
import Style from '../Search/style.scss' 


 const Search = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light blue-grey lighten-5 mb-4" id="bar">

  
<Link class="navbar-brand" to="#"> </Link> 
<form class="form-inline">
      <input class="form-control" type="text" placeholder=  "Search for a location..." aria-label="Search" id="_bar"/>
      
    </form>
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
      class="navbar-toggler-icon"></span></button>

  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

      <li class="nav-item dropdown" id="drop">
        <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Budget Range</Link>
        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
          <Link class="dropdown-item" to="#">Action</Link>
          <Link class="dropdown-item" to="#">Another action</Link>
          <Link class="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
     
        
    
    </ul>
   

   
  
  </div>
  <button id="button" class="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit">Search</button>

</nav>

    )
}

export default Search