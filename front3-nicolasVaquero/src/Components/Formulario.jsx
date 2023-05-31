import React, { useState } from 'react'

const Formulario = ({setName, setLastName, setTeam, setDate, handleSubmit, name, lastName}) => {

const [error, setError] = useState(false);

const handleError = () => {
    if (name.lenght > 3 && lastName.lenght > 6) {
        setError(true);
    }
    else{
        setError(false);
    }
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" placeholder="Nombre" onChange={(event) => setName(event.target.value)}/>
            <label>Apellido: </label>
            <input type="text" placeholder="Apellido" onChange={(event) => setLastName(event.target.value)} />
            <label>Equipo favorito: </label>
            <input type="text" placeholder="Equipo Favorito" onChange={(event) => setTeam(event.target.value)} />
            <label>Fecha de nacimiento: </label>
            <input type="date" placeholder="fechaNacimiento" onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default Formulario