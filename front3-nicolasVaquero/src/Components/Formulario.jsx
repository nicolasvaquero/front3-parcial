import React, { useState } from 'react'

const Formulario = ({setName, setLastName, setTeam, handleSubmit, error}) => {


  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className='form'>
            <label>Nombre: </label>
            <input type="text" placeholder="Nombre" onChange={(event) => setName(event.target.value)}/>
            <label>Apellido: </label>
            <input type="text" placeholder="Apellido" onChange={(event) => setLastName(event.target.value)} />
            <label>Equipo favorito: </label>
            <input type="text" placeholder="Equipo Favorito" onChange={(event) => setTeam(event.target.value)} />
            <button type='submit'>Enviar</button>
            {error && <h3 className='error'>Error por favor compruebe que su nombre: el primer caracter no sea un espacio y contenga más de 3 caracteres. Su apellido: tenga al menos 6 caracteres</h3>}
        </div>
      </form>
    </>
  )
}

export default Formulario