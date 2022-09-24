function Patient(props){
    function setEdit(id){
        const selectedPatient = props.patients.find(patient => patient.id === id)
        props.setPatient(selectedPatient)
      }

      function setDelete(id){
        props.setPatients(prev => prev.filter(patient => patient.id !== id))
      }

    return(
    <article className="bg-white w-full mt-4 rounded-md shadow-md p-6">
        <p className="uppercase font-bold text-gray-700">Pet's name: <span className="normal-case font-normal">{props.name}</span></p>
        <p className="uppercase font-bold text-gray-700">Owner's name: <span className="normal-case font-normal">{props.owner}</span></p>
        <p className="uppercase font-bold text-gray-700">Email: <span className="normal-case font-normal">{props.email}</span></p>
        <p className="uppercase font-bold text-gray-700">Date: <span className="normal-case font-normal">{props.date}</span></p>
        <p className="uppercase font-bold text-gray-700">Current symptoms: <span className="normal-case font-normal">{props.symptoms}</span></p>
        
        <div className="flex gap-20 mt-3">
            <button type="button" className="bg-indigo-600 w-full p-2 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-all mt-4" onClick={() => setEdit(props.id)}>Edit patient</button>
            <button type="button" className="bg-red-600 w-full p-2 text-white uppercase font-bold rounded-md hover:bg-red-800 cursor-pointer transition-all mt-4" onClick={() => setDelete(props.id)}>Delete patient</button>
        </div>
    </article>
    )
}

export default Patient