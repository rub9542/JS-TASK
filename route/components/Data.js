import React, { Component } from 'react'
import './todo.css'

class Data extends Component {
    render(){
        // const {status} = this.props.status;
        console.log(this.props.status);
        if(this.props.status ==='Complete'){
            return (
                <div className='title' ><strike>{this.props.title}
                    </strike></div>  )  
        }
        else{
            return (
                <div className='title1'>{this.props.title}</div>)
        }
        
            
        
    }

}
export default Data