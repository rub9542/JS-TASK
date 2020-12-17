import React, { Component } from 'react'
import './todo.css'
import Sample from './count';
import  AllDel  from './AllDel';
import Nav from './nav';
import {myTodo} from '../Actions/index';
import {connect} from 'react-redux';
export class Footer extends Component {

    render() {
       
        return (
            <div>
                <div className='bottom'><Sample/>
                <Nav/>
                <AllDel/></div>

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
        // changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
        // removeIndex: (index)=> dispatch(removeIndex(index)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Footer)
  
  
  
// export default Footer
