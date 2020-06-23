import React from 'react'
import cardStyles from './card.module.scss'

const Card = () => {
    
    
    return (
        <div className={cardStyles.Card}>
        <h1> Title Card</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis non ipsa recusandae labore culpa dicta eum incidunt, cumque nam delectus, necessitatibus consequuntur iusto ratione harum dolorem itaque natus quis!</p>
        <button>Button</button>
        </div>
    )
}

export default Card