import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState(() => JSON.parse(localStorage.getItem('patients'))||[])
  const [patient, setPatient] = useState(null)

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  return (
    <>
      <Header/>
      <main className='md:flex w-full items-start'>
        <Form patient={patient} setPatient={setPatient} setPatients={setPatients} patients={patients}/>
        <PatientList patients={patients} setPatients={setPatients} setPatient={setPatient} />
      </main>
    </>
  );
}

export default App;
