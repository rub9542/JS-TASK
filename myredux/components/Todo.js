import React, { Component } from 'react'
import './todo.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IoMdArrowRoundBack } from 'react-icons/io';
// import Data from './data';
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../actions';
import Data from './data';
import Edit from './Edit';
import Delete  from './Delete';
import Status  from './Status';
import Checkbox from './Checkbox';
// import Save from './Save';
import Cancel  from './Cancel';
import Reset from './Reset';
import Add  from './Add';
import Category from './category';


class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
             text:'',
             data:'',
             modify:null,
             removeItems:[],
        }
    }
    addItem = () => {
        let newList=[...this.props.items];
        const item={title:this.state.text,status:'Incomplete',readonly:true, select:false}
        newList.unshift(item);
        this.props.myTodo(newList);
        this.setState({
            text:'',
        })
    }
    titlechange = ( index) => {
        console.log('save clicked', this.state.data);
        {this.props.changeTitle(this.state.data,index)}
        {this.props.isEdit(index)}
        this.setState({
            data:'',
        })
    }
    reset = () => {
        const newList= [];
        this.props.myTodo(newList)
    }
    edited = (index) => {
        console.log('edit linked', index)
        this.props.isEdit(index)
        this.setState({
            // index:index,
            modify:index,
        })
        console.log('index', this.state.modify)
    }
render() {
    const items=this.props.items;
    let count=0;
    for(let i=0; i<items.length;i++){
        if(items[i].status=== 'Complete'){
            count=count+1;
        }
    }
        return (
            <div className='App'>
                <div className='top'>
                    <div className='divadd'>
                        <Add index={this.state.modify} />
                        <div className='return'><IoMdArrowRoundBack/></div>
                        <span className='count' style={{color:'#C0C0C0'}} >{count} of {items.length} done</span>
                    </div>
                    <div className='category'>
                       <Category/>
                    </div>
                </div>
                <div>
                    <table className='table'>
                        <tbody className='tbody'>
                            {items.map((item,index)=>(
                                <div key={index} className='rowParent'  style={{opacity:item.status==='Complete' ? 0.5: 1}}>
                                    <tr className='row'>
                                        <td className='item1'>
                                            <Checkbox status={item.status} index={index}/>
                                        </td>
                                        {item.readonly === false?
                                            <td className='item2'>
                                                <input value={this.state.data} className='editText' onChange={(event)=>this.setState({data:event.target.value})} placeholder={item.title}/>
                                            </td>
                                            :
                                            <tr>
                                                <td className='title'>
                                                    <Data title={item.title} />
                                                </td>
                                                <td className='status' >
                                                    <Status status={item.status}/>
                                                </td>
                                            </tr>
                                        }
                                        <td>
                                            <div className='buttons'>
                                                {item.readonly === false ?
                                                    <div>
                                                        <button className='edit1' onClick={()=>this.titlechange(index)}>
                                                            <FontAwesomeIcon icon='save'/>
                                                        </button>
                                                    </div>
                                                    :
                                                    <div>
                                                        <button className='edit' onClick={()=>this.edited(index)}>
                                                            <span className='word'>
                                                                <FontAwesomeIcon icon='edit' />
                                                            </span>
                                                        </button>
                                                    </div>
                                                }
                                                <Delete index={index}/>
                                            </div>
                                        </td>
                                    </tr>
                                </div>
                            ))}
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
        changeTitle: (payload,index) => dispatch(changeTitle(payload,index)),
        changeSelect:(index) => dispatch(changeSelect(index)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)


 // (<tr className='row'>
                                    //     <td>
                                    //         <input value={this.state.data} className='editText' onChange={(event)=>this.setState({data:event.target.value})} placeholder={item.title}/>
                                    //     </td>
                                    //     <td className='editTools'>
                                    //         {this.state.data !== '' ? 
                                    //            <button className='edit1' onClick={()=>this.titlechange(index)}>
                                    //            <FontAwesomeIcon icon='save'/>
                                    //        </button>  : null} <Cancel index={index}/>
                                    //     </td>
                                        
                                    //  </tr>) :