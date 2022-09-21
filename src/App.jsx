import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState([])

  function handleSubmit(event, newPatient){
    setPatients(prev => [...prev, newPatient])
  }

  return (
    <>
      <Header/>
      <main className='md:flex w-full items-start'>
        <Form handleSubmit={handleSubmit}/>
        <PatientList patients={patients}/>
      </main>
    </>
  );
}

export default App;
