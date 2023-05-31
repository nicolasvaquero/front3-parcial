import { useState } from 'react'
import Card from './Components/Card'
import Formulario from './Components/Formulario'
import './App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 3 && name[0]!=' ' && lastName.length > 6) {
      setShow(true)
      setError(false)
    } else {
      setShow(false);
      setError(true)
    }

}




const [name, setName] = useState('');
const [lastName, setLastName] = useState('');
const [team, setTeam] = useState('');
const [show, setShow] = useState(false);
const [error, setError] = useState(false);



  return (
    <>
      <h1>Encuesta sobre equipos de futbol</h1>
      <Formulario show={show} setName = {setName} setLastName = {setLastName} setTeam = {setTeam} handleSubmit={handleSubmit} error = {error}/>
      {show && <Card name={name} lastName={lastName} team={team}   / >}
    </>
  )
}

export default App
