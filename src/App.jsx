import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState(() => JSON.parse(localStorage.getItem('patients'))||[])
  const [patientEdit, setPatientEdit] = useState(null)

  function handleSubmit(newPatient){
    setPatients(prev => [...prev, newPatient])
  }

  function handleEdit(patient){
    const newArr = patients.map(value => {
      return (value.id === patient.id ? patient : value)
    })
    setPatients(newArr)
  }

  function setEdit(id){
    const patient = patients.find(patient => patient.id === id)
    setPatientEdit(patient)
  }

  function setDelete(id){
    setPatients(prev => prev.filter(patient => patient.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  return (
    <>
      <Header/>
      <main className='md:flex w-full items-start'>
        <Form handleSubmit={handleSubmit} patientEdit={patientEdit} setPatientEdit={setPatientEdit} handleEdit={handleEdit}/>
        <PatientList patients={patients} setEdit={setEdit} setDelete={setDelete}/>
      </main>
    </>
  );
}

export default App;
