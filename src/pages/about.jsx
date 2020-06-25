import React from 'react'
import Layout from '../components/Layout'
import Cardv2 from '../components/Cardv2'


const About = () => {
    const text = 'lorem ipsum dolor sit amet consectetur'
    return(
        
            <Layout> 
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-4">
                        <h1>About</h1>
                        <p>{text}</p>
           
           <div className="container">
               <div className="row">
                   <div className="col-4">
                       <Cardv2 
                       titleCard="Card title 1"
                       textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis non ipsa recusandae labore culpa dicta eum incidunt, cumque nam delectus, necessitatibus consequuntur iusto ratione harum dolorem itaque natus quis!" 
                       colorButton="gatsby"
                       backgroundCard ="#e3a617"
                       styleDeafult ={true}
                       />
                   </div>
                   <div className="col-4">
                       <Cardv2 
                       titleCard="Card Title 2"
                       textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis non ipsa recusandae labore culpa dicta eum incidunt, cumque nam delectus, necessitatibus consequuntur iusto ratione harum dolorem itaque natus quis!"
                       colorButton="gatsby"
                       backgroundCard =""
                       styleDeafult ={false}
                       />
                   </div>
                   <div className="col-4">
                       <Cardv2 
                       titleCard="Title Card 3"
                       textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis non ipsa recusandae labore culpa dicta eum incidunt, cumque nam delectus, necessitatibus consequuntur iusto ratione harum dolorem itaque natus quis!"
                       colorButton="gatsby"
                       backgroundCard =""
                       styleDeafult ={true}
                       />
                   </div>
               </div>
           </div>

                        </div>
                    </div>
                </div>
           

            
           
           
            </Layout>
            
            

    )
}

export default About