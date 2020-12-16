import './todo.css'
// import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';


import React, {   useState } from 'react';
import {connect} from 'react-redux';
import {myTodo,newTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';


function Modal1({newTodo}) {
    const [value, setValue] = useState("");
    

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        newTodo({title:value, status:'Incomplete', readonly:true, select:false, edit:false });
        setValue("");
    };
       
    
    
    return (        
        <form onSubmit={handleSubmit}>
            <span ><input
                type="text"
                value={value}
                autoFocus={true}
                className='input'
                placeholder="What needs to be done?"
                onChange={e => setValue(e.target.value)}
            /></span>
        </form>
    )
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
        removeIndex: (index)=> dispatch(removeIndex(index)),
        changeTitle: (payload,index) => dispatch(changeTitle(payload,index)),
        isEdit: (index) => dispatch(isEdit(index)),
        newTodo:(payload) =>dispatch(newTodo(payload)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal1)
