import React, { Component } from 'react'
import {connect} from 'react-redux';
// import { AiOutlineDelete} from "react-icons/ai";
import { AiOutlineClose} from "react-icons/ai";
import './todo.css'
import {removeIndex } from '../Actions';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Delete extends Component {

    deleted=(index)=>{
        console.log('edit linked', index)
        this.props.removeIndex(index)
    }
    render(){
        const {index}=this.props
        // console.log(index)
        return (
            <button className='edit' onClick={()=>{if(!this.props.items[index].readonly){
                return(null)
            }
            else{
                this.deleted(index)}}}>
                <span className='word'> 
                    <AiOutlineClose/>
                </span>
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
