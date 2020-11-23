import React, {useState} from 'react'

function Hookscounter() {
    const [name, setname] = useState({fname:'',lname:''})
    return (
        <form>
        <input value={name.fname} onChange={e=> setname({...name, fname:e.target.value})}/>
        <input value={name.lname} onChange={e=> setname({...name, lname:e.target.value})}/>
        <h2>fname:{name.fname}</h2>
        <h2>lname:{name.lname}</h2>
        <h1>{JSON.stringify(name)}</h1>
        </form>
            
    )
}

export default Hookscounter
