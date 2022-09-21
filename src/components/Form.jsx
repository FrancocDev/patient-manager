import {useState} from "react"

function Form(props){
    const [form, setForm] = useState({
        id: window.crypto.randomUUID(),
        name: "",
        owner: "",
        email: "",
        date: "",
        symptoms: "",
    })
    const [error, setError] = useState(false)

    function handleForm(event){
        const key = event.target.id;
        const value = event.target.value;
        setForm(prev => ({...prev, [key]: value}))
    }

    function onSubmit(event){
        const missingFields = Object.values(form).some(val => val.length === 0)
        event.preventDefault()
        if(missingFields){
            setError(true)
        } else {
        props.handleSubmit(event, form)
        setError(false)
        setForm({
            id: window.crypto.randomUUID(),
            name: "",
            owner: "",
            email: "",
            date: "",
            symptoms: "",
        })
        }
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 flex flex-col items-center justify-center p-6">
            <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
            <p className="mt-2">Adding and <span className="text-indigo-500 font-bold">managing</span> patients</p>
            <form className="mt-4 flex shadow-md bg-white rounded-lg flex-col p-4 w-10/12">
                {error && <div className="bg-red-600 text-white text-center p-1 font-bold rounded-md">All fields must be filled in</div>}
                <div className="mt-2 mb-4">
                    <label htmlFor="name" className="text-gray-700 uppercase font-bold">Pet's name</label>
                    <input className="p-2 border-2 w-full mt-1 placeholder-gray-400 rounded-md" type="text" id="name" placeholder="Pet's name" value={form.name} onChange={e => handleForm(e)}/>   
                </div>
                <div className="mb-4">
                    <label htmlFor="owner" className="text-gray-700 uppercase font-bold">owner's name</label>
                    <input className="p-2 border-2 w-full mt-1 placeholder-gray-400 rounded-md" type="text" id="owner" placeholder="Owner's name" value={form.owner} onChange={e => handleForm(e)}/>   
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email</label>
                    <input className="p-2 border-2 w-full mt-1 placeholder-gray-400 rounded-md" type="email" id="email" placeholder="Contact email" value={form.email} onChange={e => handleForm(e)}/>   
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="text-gray-700 uppercase font-bold">Date</label>
                    <input className="p-2 border-2 w-full mt-1 placeholder-gray-400 rounded-md" type="date" id="date" value={form.date} onChange={e => handleForm(e)}/>   
                </div>
                <div className="mb-4">
                    <label htmlFor="symptoms" className="text-gray-700 uppercase font-bold">Current symptoms</label>
                    <textarea className="p-2 border-2 w-full mt-1 placeholder-gray-400 rounded-md" type="text" id="symptoms" placeholder="Current symptoms of the pet" value={form.symptoms} onChange={e => handleForm(e)}/>   
                </div>
                <input type="submit" 
                className="bg-indigo-600 w-full p-2 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-all mb-2 mt-2"
                value="Add patient"
                onClick={event => onSubmit(event)}
                />
            </form>
        </div>
    )
}

export default Form;