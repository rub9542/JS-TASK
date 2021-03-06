import React, { Component } from 'react'
import './todo.css'
import { BiEditAlt } from 'react-icons/bi';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { IoMdArrowRoundBack } from 'react-icons/io';
// import Data from './data';
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../Actions';
import Data from './Data';
// import Edit from './Edit';
import Delete  from './Delete';
import Status  from './Status';
import Checkbox from './Checkbox';
import { IoSaveOutline } from 'react-icons/io5';
// import Save from './Save';
// import Cancel  from './Cancel';
import Reset from './reset';
import Add  from './Add';
// import Category from './category';
import { BrowserRouter as BRouter } from 'react-router-dom'; 
// import Router from './router';
// import Category from './category';
// import All from './All';
// import Completed from './completed';
import Pending from './Pending';
import { Route } from "react-router-dom";


export class Completed extends Component {
    constructor(props) {
        super(props)
        this.state = {
             text:'',
             data:'',
             modify:null,
             removeItems:[],
        }
    }
    titlechange = ( index) => {
        console.log('save clicked', this.state.data);
        {this.props.changeTitle(this.state.data,index)}
        {this.props.isEdit(index)}
        this.setState({
            data:'',
        })
    }
    edited = (index) => {
        console.log('edit linked', index);
        this.props.isEdit(index);
        this.setState({
            // index:index,
            modify:index,
        })
        console.log('index', this.state.modify)
    }
    render() {
        const filtered= this.props.items.filter(item => item.status ==='Complete')
        console.log('completed', filtered);
        return (
            <div>
                 <table className='table'>
                        <tbody className='tbody'>
                            {filtered.map((item,index)=>(
                                <div key={index} className='rowParent' >
                                    <tr className='row'>
                                        <td className='item1'>
                                            <Checkbox status={item.status} index={index}/>
                                        </td>
                                        {item.readonly === false?
                                            <td className='item2'>
                                                <input value={this.state.data} autoFocus={true} className='editText' onChange={(event)=>this.setState({data:event.target.value})} placeholder={item.title}/>
                                            </td>
                                            :
                                            <tr>
                                                <td onClick={()=>this.edited(index)} className='item'>
                                                 <Data title={item.title} status={item.status}/>
                                                   
                                                </td>
                                                
                                            </tr>
                                        }
                                        <td>
                                            <div className='buttons'>
                                                {item.readonly === false ?
                                                    <div>
                                                        <button className='edit1' onClick={()=>this.titlechange(index)}>
                                                            <IoSaveOutline/>
                                                        </button>
                                                    </div>
                                                    :
                                                    <div style={{opacity: '0'}}>
                                                        <button className='edit' onClick={()=>this.edited(index)}>
                                                            <span className='word'>
                                                                <BiEditAlt/>
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
                {/* <h1>All</h1> */}
            </div>
        )
    }
}

// export default All

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

export default connect(mapStateToProps,mapDispatchToProps)(Completed)

