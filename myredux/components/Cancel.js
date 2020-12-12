import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import { isEdit } from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { render } from '@testing-library/react';

class Cancel extends Component {

   
    render(){
        const {index}=this.props
        // console.log(index)
        return (
            <div>
                <button className='edit1'  onClick={(e)=>this.props.isEdit(index)}>
                    {/* cancel */}
                    <p className='word'> <FontAwesomeIcon icon='times'/></p>
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
export default connect(mapStateToProps,mapDispatchToProps)(Cancel)
