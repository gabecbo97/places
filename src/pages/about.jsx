import React from 'react'
import Menu from '../components/Menu'
import Layout from '../components/Layout'
import Cardv2 from '../components/Cardv2'


const About = () => {
    
    return(
        
            <Layout> 
            <Menu />

            
            <h1>About</h1>
           
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Cardv2 
                        titleCard="Card title 1"
                        textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis non ipsa recusandae labore culpa dicta eum incidunt, cumque nam delectus, necessitatibus consequuntur iusto ratione harum dolorem itaque natus quis!" 
                        colorButton="gatsby"
                        />
                    </div>
                    <div className="col-4">
                        <Cardv2 
                        titleCard="Card Title 2"
                        textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis non ipsa recusandae labore culpa dicta eum incidunt, cumque nam delectus, necessitatibus consequuntur iusto ratione harum dolorem itaque natus quis!"
                        colorButton="warning"/>
                    </div>
                    <div className="col-4">
                        <Cardv2 
                        titleCard="Title Card 3"
                        textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis non ipsa recusandae labore culpa dicta eum incidunt, cumque nam delectus, necessitatibus consequuntur iusto ratione harum dolorem itaque natus quis!"
                        colorButton="danger"/>
                    </div>
                </div>
            </div>
           
            </Layout>
            
            

    )
}

export default About