import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import { TiTick} from "react-icons/ti";
import { statusChange, changeIndex, removeIndex } from '../Actions';

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
        console.log('index hai',index)
        return (
            <div  >
        
        
                

                
                <input className='checkbox'
                type='checkbox'
                defaultChecked={false}
                checked={status=== 'Complete'}
                onClick={()=>
                   {
                       if(!this.props.items[index].readonly){
                         return(  null)
                       } 
                       else {
                           this.checkboxx(status,index)}
                        }
                    }
               />
            
                
                
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
