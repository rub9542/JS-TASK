import React from 'react';


const Data =({first_name, last_name, gender,phone,image})=>{
    return(
        <div>
            {this.state}
            <h1>{first_name} {last_name}</h1>
            <a>{gender}</a>
            <a>{phone}</a>
            <img src={image} alt=''/>
        </div>
    )
}
export default Data