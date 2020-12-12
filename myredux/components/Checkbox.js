import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import { statusChange, changeIndex, removeIndex } from '../actions';

class Checkbox extends Component {

    
    checkboxx=(value,index)=>{
        console.log('checkbox clicked')
        const items=this.props.items
        if(value==='Incomplete'){
           this.props.statusChange('Complete', index)
        }
        else{
            this.props.changeIndex('Incomplete',index) 
            }
        for(let i=index; i<items.length;i++){
            if(items[i].status==='Complete'){
               
            }
    
        }console.log('for loop done')
       
    }
    render(){
        const {index,status}=this.props
        // console.log(index)
        return (
            <div >
                <label class='custom-radio-btn'>
                <input className='checkbox'
                 type='radio'
                 defaultChecked={false}
                 checked={status=== 'Complete'}
                 onClick={()=>
                    {if(!this.props.items[index].readonly){
                          return(  null)
                        } 
                        else {
                            this.checkboxx(status,index)}}}
                />
                <span className='checkmark'></span>
                </label>
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
        removeIndex: (index)=> dispatch(removeIndex(index)),
        changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
        statusChange: (payload, index) => dispatch(statusChange(payload,index)),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkbox)
