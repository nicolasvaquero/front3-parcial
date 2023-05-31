import React from 'react'

const Card = ({name, lastName, team}) => {
  return (
    <div className='tarjeta'>  
        <h1>Hola {name} {lastName} gracias por tu respuesta!</h1>
        <h2>Tu equipo es: {team}</h2>
        
    </div>
  )
}

export default Card