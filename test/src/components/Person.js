import React from 'react'

function Person({person}) {
    return (
        <div>
        <h1>i am {person.name}, i am {person.age} years old, i have learnt {person.skill}</h1>
        </div>
    )
}

export default Person
