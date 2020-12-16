import React, { Component } from 'react'
import './todo.css'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { BiEditAlt } from 'react-icons/bi';
import { IoSaveOutline } from 'react-icons/io5';
// import Data from './data';
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../Actions';
import Data from './Data';
// import Edit from './Edit';
import Delete  from './Delete';
import Status  from './Status';
import Checkbox from './Checkbox';
// import Save from './Save';
// import Cancel  from './Cancel';
import Reset from './reset';
import { AiOutlineClose} from "react-icons/ai";
import Add  from './Add';
// import Category from './category';
import { BrowserRouter as BRouter } from 'react-router-dom'; 
// import Router from './router';
// import Category from './category';
// import All from './All';
import Completed from './completed';
import Pending from './Pending';
export class AllDel extends Component {
    del=()=>{
        
    }
    render() {
        return (
            <div>
                <button onClick={this.del} className='delall' >
                <span className='word'> 
                    <AiOutlineClose/>
                </span>
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
        // changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
        removeIndex: (index)=> dispatch(removeIndex(index)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllDel)

