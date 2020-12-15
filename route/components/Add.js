import React, { Component } from 'react'
import {connect} from 'react-redux';
import Modal from 'react-modal'
import { AiOutlineDelete} from "react-icons/ai";
import {IoMdAddCircleOutline} from "react-icons/io";
import './todo.css'
// import {myTodo} from '../actions';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';
import Reset from './reset'
import Modal1 from './modal';
// import Cancel from './Cancel'

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faLeaf } from '@fortawesome/free-solid-svg-icons';

class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:'',
             add:false,
             ENTER_KEY : 13,
        }
    }
    addItem=()=>{
        console.log('add clicked',this.props.items);
        const newList=[...this.props.items];
        console.log(newList);
        if(this.state.text !== ''){
            const item={title:this.state.text,status:'Incomplete',readonly:true, edit:false}
            newList.unshift(item);
            this.props.myTodo(newList);
            this.setState({
                text:'',
                add:false,

            })
        }
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
   
    render(){
        let del=false;
        let count=0;
        const items=this.props.items;
        console.log('items',items)
        for(let i=0; i<items.length;i++){
            if(items[i].status=== 'Complete'){
                del=true;
                count=count+1;
            }
        }
        return (
            <div className='addrow' >
                <div className='toprow'>
                    <button className='resetbtn'  onClick={()=>this.setState({add:true})}>     
                        <span className='reset'><IoMdAddCircleOutline/></span>
                    </button>
                    <Modal isOpen={this.state.add} onRequestClose={()=>this.setState({add:false})} >

                        <Modal1/>
                    </Modal>
                    
                    {/* <input 
                        className="inputarea"
                        type='text'
                        value={this.state.text}
                        onKeyUpCapture={()=>this.addItem()}
                        autoFocus={true}
                        placeholder= "Enter the items here"
                        onChange={this.addText}
                    /> */}
                </div>
                <div className='deletebtndiv'>
                <Reset/>
                    <button onClick={this.deletemany} style={{opacity: del === true ? 1 : 0}} className='resetbtn'>
                    <span className='reset'> <AiOutlineDelete/></span>
                    </button>
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
