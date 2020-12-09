import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import {removeIndex } from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { render } from '@testing-library/react';

export class Delete extends Component {

    deleted=(index)=>{
        console.log('edit linked', index)
        this.props.removeIndex(index)
    }
    render(){
        const {index}=this.props
        // console.log(index)
        return (
            <button className='edit' onClick={()=>this.deleted(index)}>
                <p className='word'> <FontAwesomeIcon icon='trash'/></p>
            </button>
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
        removeIndex: (index)=> dispatch(removeIndex(index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Delete)
