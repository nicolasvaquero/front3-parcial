import React from 'react'

const Card = ({name, lastName, team}) => {
  return (
    <>  
        <h1>Hola {name} {lastName} gracias por tu respuesta!</h1>
        <h2>Tu equipo es: {team}</h2>
    </>
  )
}

export default Card