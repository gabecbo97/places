import React from 'react'
import * as Styled from './styles'
import Image from '../Images'



const Cardv2 = (props) => {
    return(


<Styled.CardV2Wrapper 
className="card" 
background ={props.backgroundCard }
primary={props.styleDefault}
>
<Image name={props.nameImage}/>
  <div className="card-body">
     
    <h5 className="card-title">{props.titleCard}</h5>
    <p className="card-text">{props.textCard}</p>
     <a href="/" className={`btn btn-${props.colorButton}`}>Go somewhere</a>
 </div>
</Styled.CardV2Wrapper>


    )
    
}

export default Cardv2