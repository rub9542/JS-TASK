import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
// import {myTodo} from '../actions';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../actions';
import Reset from './Reset'
import Cancel from './Cancel'
// import AiOutlineDelete from 'react-icons/ai';
import { AiOutlineDelete } from "react-icons/ai";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
// import { render } from '@testing-library/react';

class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:'',
        }
    }
    addItem=()=>{
        if (!this.state.text) return

        console.log('add clicked',this.props.items)
        const newList=[...this.props.items];
        console.log(newList)
        const item={title:this.state.text,status:'Incomplete',readonly:true, edit:false}
        newList.unshift(item);
        this.props.myTodo(newList);
        this.setState({
            text:'',
            data:'',
           
        })
    }
    deletemany=()=>{
        for(let i=0; i<this.props.items.length; i++){
            if( this.props.items[i].status === 'Complete'){
                this.props.removeIndex(i)
            }
            
        }
}
    titlechange=( index)=>{
        {this.props.changeTitle(this.state.text,index)}
        {this.props.isEdit(index)}
        this.setState({
            text:'',

        })

    }
    render(){
        // console.log(index)
              
        
        // const {index}=this.props
        const items=this.props.items
        console.log('items',items)
        
        return (
            <div className='addrow' >
                <div className='toprow'>
                    <input 
                        className="inputarea"
                        value={this.state.text}
                         onChange={(event) => this.setState({ text: event.target.value })}
                    />
                    <button className="addbtn"  onClick={()=>this.addItem()}>     
                        <span className='add'> +</span>
                    </button>
                    
                    
                </div>
                <div className='deletebtndiv'>
                <Reset/>
                    <button onClick={this.deletemany} className='deletebtn'>
                        <AiOutlineDelete/></button>
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
        myTodo : (payload)=> dispatch(myTodo(payload)),
        removeIndex: (index)=> dispatch(removeIndex(index)),
        changeTitle: (payload,index) => dispatch(changeTitle(payload,index)),
        isEdit: (index) => dispatch(isEdit(index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Add)
