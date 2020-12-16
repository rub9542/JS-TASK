import React, {  useEffect, useRef, useState } from 'react';
import {connect} from 'react-redux';
import {myTodo,newTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';

// function useKey(key, cb){
    
//     const callbackRef = useRef(cb);

//     // useEffect(() => {
//     //    callbackRef.current = cb; 
//     // }, )
//     useEffect(() => {
//         function handle(event){
//             if(event.code === key){
//                 callbackRef.current(event)
//             }
//         }
//         document.addEventListener('keypress',handle)
//         return () => document.removeEventListener('keypress',handle);
//     }, [key])
// }
function Modal1({newTodo}) {
    const [value, setValue] = useState("");
    

const handleSubmit = e => {
e.preventDefault();
if (!value) return;
newTodo({title:value, status:'Incomplete', readonly:true, select:false, edit:false }

);
setValue("");
};
       
    
    // useKey('Enter', handleEnter);
   
    // const items= [...props.items];
    // // if(data !== ''){
    //     console.log('data'. data)
    //     const newItem= {title:data, status:'Incomplete', readonly:true, select:false, edit:false };
    //     // items.(newItem)
    //     const newList =[newItem, ...items]
    //     props.myTodo(newList)
       
    // const handlesubmit= e =>{
    //     e.preventDefault();
    //     if(!data)return;
    //     const newItem= {title:data, status:'Incomplete', readonly:true, select:false, edit:false };
    //     const newList =[newItem, ...items]
    //     myTodo(newItem)
    // }
    return (
        
            <form onSubmit={handleSubmit}>

<input
type="text"
value={value}
autoFocus={true}
onChange={e => setValue(e.target.value)}
/>
{/* <button>ADD</button> */}

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
