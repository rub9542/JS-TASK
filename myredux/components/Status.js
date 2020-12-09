import React, { Component } from 'react'
import './todo.css'


export class Status extends Component {
    render(){
        const {status}=this.props
        return (
            <div className='status'>
                {status}
            </div>
        )
    }
}

export default Status
