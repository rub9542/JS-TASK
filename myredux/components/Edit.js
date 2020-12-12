import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import {isEdit} from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Edit extends Component {

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
                   <span> <FontAwesomeIcon icon='edit' /></span>
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
