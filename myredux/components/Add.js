import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import {myTodo} from '../actions';
import Reset from './Reset'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
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
        const item={title:this.state.text,status:'Incomplete',readonly:true}
        newList.unshift(item);
        this.props.myTodo(newList);
        this.setState({
            text:'',
           
        })
    }
   
    render(){
        // const {index}=this.props
        // console.log(index)
        console.log('items',this.props.items)
        return (
            <div>
                <div className='toprow'>
                    <input 
                        className="inputarea"
                        value={this.state.text}
                         onChange={(event) => this.setState({ text: event.target.value })}
                    />
                    <button className="addbtn"  onClick={()=>this.addItem()}>     
                        <p className='add'> +</p>
                    </button>
                    <Reset/>
                    
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Add)
