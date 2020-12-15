import React, { Component } from 'react'
// import './todo.css'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { AiOutlineDelete} from "react-icons/ai";
// import Data from './data';
import Add from './Add'
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../Actions';
// import Data from './data';
// import Edit from './Edit';
// import Delete  from './Delete';
// import Status  from './Status';
// import Checkbox from './Checkbox';
// import Save from './Save';
// import Cancel  from './Cancel';
// import Reset from './Reset';
// import Category from './category';
// import { BrowserRouter as BRouter } from 'react-router-dom'; 
// import Router from './router';
// import Category from './category';
// import All from './All';
// import Completed from './Completed';
// import Ongoing from './Ongoing';
import { Route } from "react-router-dom";


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
            <div className='Apptodo'>
                <div className='top'>
                    <div className='divadd'>
                        <Add index={this.state.modify} />
                        
                        <span className='count' style={{color:'#C0C0C0'}} >{count} of {items.length} done</span>
                    </div>
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
