import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import {isEdit} from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { render } from '@testing-library/react';

export class Edit extends Component {

    edited=(index)=>{
        console.log('edit linked', index)
        this.props.isEdit(index)
    }
    render(){
        const {index}=this.props
        // console.log(index)
        return (
            <div>
                <button className='edit' onClick={()=>this.edited(index)}>
                   <p> <FontAwesomeIcon icon='edit' /></p>
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
        isEdit: (index) => dispatch(isEdit(index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit)
