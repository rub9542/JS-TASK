import React, { Component } from 'react'
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../actions';
import {connect} from 'react-redux';

class Category extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    all = () => {
        const items=[...this.props.items];
        const newList=[]
        console.log('completed', items);
        for(let i=0; i<items.length;i++){
           
                console.log('completed', items[i]);
                // const item={title:this.state.text,status:'Incomplete',readonly:true, edit:false}
                newList.push(items[i]);
           
        }
        this.props.myTodo(newList)
    }
    
    completed = () => {
        const items=[...this.props.items];
        const newList=[]
        console.log('completed', items);
        for(let i=0; i<items.length;i++){
            if(items[i].status=== 'Complete'){
                console.log('completed', items[i]);
                // const item={title:this.state.text,status:'Incomplete',readonly:true, edit:false}
                newList.push(items[i]);
            }
        }
        this.props.myTodo(newList)
    }
    ongoing = () => {
        const items = [...this.props.items];
        const newList = []
        for(let i=0; i<items.length;i++){
            if(items[i].status !== 'Complete'){
                console.log('incompleted', items[i]);
                // const item={title:this.state.text,status:'Incomplete',readonly:true, edit:false}
                newList.push(items[i]);
            }
        }
        this.props.myTodo(newList)
    }
    
    render() {
        return (
            <div className='categories'>
                <button className='All' onClick={this.all}>All</button>
                <button className='All' onClick={this.completed}>Completed</button>
                <button className='All' onClick={this.ongoing}>Ongoing</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Category)
