import Patient from "./Patient";

function PatientList(props){
    const RenderPatients = props.patients.map(patient => (
        <Patient id={patient.id} 
        key={patient.id} 
        name={patient.name} 
        owner={patient.owner} 
        email={patient.email} 
        date={patient.date} 
        symptoms={patient.symptoms} 
        setEdit={props.setEdit}/>
        ))

    return(
        <div className="md:w-1/2 lg:w-3/5 p-6 flex flex-col items-center">
            <h2 className="font-black text-3xl text-center">{props.patients.length > 0 ? "Patient's list" : "There are no patients"}</h2>
            <p className="mt-2">Manage your <span className="text-indigo-500 font-bold">patients and appointments</span></p>
            {props.patients.length > 0 && RenderPatients}
        </div>
    )
}

export default PatientList;