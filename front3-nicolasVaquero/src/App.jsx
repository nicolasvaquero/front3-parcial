import { useState } from 'react'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 3 && lastName.length > 6) {
      setShow(true)
    } else {
      setShow(false);
    }

}




const [name, setName] = useState('');
const [lastName, setLastName] = useState('');
const [team, setTeam] = useState('');
const [date, setDate] = useState('');
const [show, setShow] = useState(false);
const [error, setError] = useState(false);



  return (
    <>
      <h1>Encuesta sobre equipos de futbol</h1>
      <Formulario setName = {setName} setLastName = {setLastName} setTeam = {setTeam} setDate = {setDate} handleSubmit={handleSubmit}/>
      {show && <Card name={name} lastName={lastName} team={team} date={date}   / >}
    </>
  )
}

export default App
