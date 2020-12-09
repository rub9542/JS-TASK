import React, { Component } from 'react'
import './todo.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { FaBeer } from 'react-icons/fa';
// import Data from './data';
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../actions';
import Data from './data';
import Edit from './Edit';
import Delete  from './Delete';
import Status  from './Status';
import Checkbox from './Checkbox';
// import Save from './Save';
import Cancel  from './Cancel';
import Reset from './Reset';
import Add  from './Add';


export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:'',
             data:'',
             item:0,
            //  isEditing:false,
        }
    }
    addItem=()=>{
        let newList=[...this.props.items];
        const item={title:this.state.text,status:'Incomplete',readonly:true}
        newList.unshift(item);
        this.props.myTodo(newList);
        this.setState({
            text:'',
           
        })
    }
    titlechange=( index)=>{
        {this.props.changeTitle(this.state.data,index)}
        {this.props.isEdit(index)}
        this.setState({
            data:'',
        })
    
       }
   
reset=()=>{
   
    const newList= [];
    this.props.myTodo(newList)
}

render() {
        return (
            <div className='App'>
                <div className='top'>
                    <div className='divadd'>
                       <Add  />
                       
                    </div>
                    <div className='divReset'>
                        
                    </div>
                </div>
     
                <div>
                    {/* <div>
                        <p>{this.state.item} of {this.props.items.length} done</p>
                    </div> */}
                    <table className='table'>
                        <tbody className='tbody'>
                            {this.props.items.map((item,index)=>
                            (<div key={index}  style={{opacity:item.status==='Complete' ? 0.5: 1}}>
                                {item.readonly ===false ?
                                    (<tr className='row'>
                                        <td>
                                            <input value={this.state.data} className='editText' onChange={(event)=>this.setState({data:event.target.value})} placeholder={item.title}/>
                                        </td>
                                        <td className='editTools'>
                                            {this.state.data !== '' ? 
                                               <button className='edit1' onClick={()=>this.titlechange(index)}>
                                               <FontAwesomeIcon icon='save'/>
                                           </button>  : null} <Cancel index={index}/>
                                        </td>
                                        
                                     </tr>) :
                                     (<tr className='row'>
                                        <td className='item1'>
                                          <Checkbox status={item.status} index={index}/>
                                        </td>
                                        <td className='item2'>
                                            <Data title={item.title}/>
                                            <Status status={item.status}/>
                                        </td>
                                        <td>
                                            <div className='buttons'>
                                                <Edit index={index}/>
                                                <Delete index={index}/>
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </div> ))}
                        </tbody>
                    </table>
                </div>
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
        statusChange: (payload, index) => dispatch(statusChange(payload,index)),
        myTodo : (payload)=> dispatch(myTodo(payload)),
        changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
        removeIndex: (index)=> dispatch(removeIndex(index)),
        isEdit: (index) => dispatch(isEdit(index)),
        changeTitle: (payload,index) => dispatch(changeTitle(payload,index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)
