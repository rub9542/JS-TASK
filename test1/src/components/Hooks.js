import React, {useState} from 'react'

function Hooks() {
    const initial =0 
    const [count, setCount] = useState(initial)
    return (
        <div>
        <button onClick={()=> setCount(initial)}> reset {count}</button>
            <button onClick={()=> setCount(count+1)}>count :{count}</button>
        </div>
    )
}

export default Hooks
