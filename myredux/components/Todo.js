import React, { Component } from 'react'
import './todo.css'
import Data from './data';
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../actions';


export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:'',
             data:'',
            //  isEditing:false,
        }
    }
    addItem=()=>{
        let newList=this.props.items;
        newList.push({title:this.state.text,status:'incomplete',readonly:true});
        this.props.myTodo(newList);
        this.setState({
            text:'',
           
        })
    }
   titlechange=(index)=>{
    {this.props.changeTitle(this.state.data,index)}
    {this.props.isEdit(index)}

   }
    render() {
        return (
            <div>
                <div className='top'>
            <input
          className="inputarea"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
        />
             <button className="addbtn"  onClick={this.addItem}>      +
      </button>  </div>
      <div>
          <table className='table'>
             
              <tbody className='tbody'>
          {this.props.items.map((item,index)=>(
              <div key={index} style={{opacity:item.status==='complete' ? 0.5: 1}

              }>
                  {item.readonly ===false ?
                  (<tr className='row'>
                      <td>
                          <input value={this.state.data} onChange={(event)=>this.setState({data:event.target.value})} placeholder={item.title}/></td>
                  <td>{this.state.data !== '' ? <button onClick={()=>this.titlechange(index)}>save</button> : null}</td>
                  <td><button onClick={(e)=>this.props.isEdit(index)}>Cancel</button></td>
                  </tr>) :
                  
                  (<tr className='row'>
                      <td className='item1'>
                        <input className='checkbox'
                  type='radio'
                  checked={item.status=== 'complete'}
                   onChange={(e)=> {item.status==='incomplete'? 
                   this.props.statusChange('complete', index) :
                   this.props.changeIndex('incomplete',index) } }/></td>
                      {/* <td className='item2'>{item.title}</td> */}
                      {<div><Data title={item.title}/></div>}
                      <td className='item3'>{item.status}</td>
                    
                    <td className='item4'>
                      <button className='edit' onClick={(e)=>this.props.isEdit(index)}>
                          Edit
                        </button>
                        <button className='edit' onClick={(e)=>this.props.removeIndex(index)}>
                        Delete
                    </button>
                    </td>
                  
                  </tr>
                    
                    )
                  
                  }
                  
          {/* <td>{item.status}</td>
                  <td><input 
                  type='checkbox'
                  checked={item.status=== 'complete'}
                   onChange={(e)=> {item.status==='incomplete'? 
                   this.props.statusChange('complete', index) :
                   this.props.changeIndex('incomplete',index) } }/></td> */}
                   {/* <td><button onClick={(e)=>this.props.isEdit(index)}>Edit</button></td>
                   <td><button onClick={(e)=>this.props.removeIndex(index)}>Delete</button></td> */}
              </div>

          ))}</tbody>
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
