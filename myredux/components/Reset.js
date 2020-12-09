import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import { GrPowerReset } from 'react-icons/gr';
import {myTodo } from '../actions';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { render } from '@testing-library/react';

export class Cancel extends Component {

    reset=()=>{
   
        const newList= [];
        this.props.myTodo(newList)
    }
    render(){
        return (
            <div>
                <button className='edit' onClick={this.reset}>
                   <p className='word'> <GrPowerReset/> </p>
                </button>
            </div>
        )
    }
}
const mapStateToProps= state =>{
    const {items} =state.todo
    return{
     items   
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myTodo : (payload)=> dispatch(myTodo(payload)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cancel)

