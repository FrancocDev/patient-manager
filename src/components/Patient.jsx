function Patient(props){
    return(
    <article className="bg-white w-full mt-4 rounded-md shadow-md p-6">
        <p className="uppercase font-bold text-gray-700">Pet's name: <span className="normal-case font-normal">{props.name}</span></p>
        <p className="uppercase font-bold text-gray-700">Owner's name: <span className="normal-case font-normal">{props.owner}</span></p>
        <p className="uppercase font-bold text-gray-700">Email: <span className="normal-case font-normal">{props.email}</span></p>
        <p className="uppercase font-bold text-gray-700">Date: <span className="normal-case font-normal">{props.date}</span></p>
        <p className="uppercase font-bold text-gray-700">Current symptoms: <span className="normal-case font-normal">{props.symptoms}</span></p>
    </article>
    )
}

export default Patient