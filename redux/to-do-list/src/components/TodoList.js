import React, { Component } from "react";
import "./list.css";
import { connect } from "react-redux";
// import {  } from '../actions'
import { createToDo, changeStatus, changeIndex } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isEditing:true,
      // count: "not checked",
    };
    // this.renderList = this.renderList.bind(this);
    // this.addItem = this.addItem.bind(this);
    // this.resetItem = this.resetItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    // this.sortItems = this.sortItems.bind(this);
  }
  editItem =()=>{
    this.setState({
      isEditing:!this.state.isEditing
    })
  }

  deleteItem=(index) =>{
    const newList = this.props.items.filter(
      (x) => this.props.items.indexOf(x) !== index
    );
    this.props.createToDo(newList);
  }
 


  addItem=() =>{
    let newList = this.props.items;
    newList.push({ title: this.state.text, status:'incomplete' })
    this.props.createToDo(newList);
    this.setState({
      text: "",
    });
  }

  // sortItems() {
  //   const newList = [...this.props.items].sort(function(a,b) {return (a.title.toLowerCase()<b.title.toLowerCase())?(-1):(1)});
  //   this.props.createToDo(newList);
  // }

  

  resetItem=()=> {
    const newList = [];
    this.props.createToDo(newList);
  }
  
  toggletask=(index)=>{
    console.log(this.props.items);

    let newList = this.props.items;
    let ss= newList.splice(index,1);
    newList.push(ss[0]);
    this.props.createToDo(newList);
    console.log(newList); 
  }

  render() {
    // const{items} =this.props;
   
    return (
      <div className="listbg">
       <div className="top"> <input
          className="inputarea"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
        />
        {this.state.text !=='' ?  <button className="addbtn"  onClick={this.addItem}>      +
      </button> :null}
      {/* <button className="addbtn"  onClick={this.addItem}>      +
      </button>  */}
     
    
       
        <button className="reset" onClick={this.resetItem}>
          Reset
        </button></div>
        <div>{this.props.items.length}</div>
        {this.props.items !== [] ? 
        
          <table className="table" >
            
            <tbody>
              {this.props.items.map((x, index) => (
                <tr key={index} className='row'>
                  <td className="th1">
                    <input type='radio'className="checkbox"
                    onChange={()=>this.props.changeIndex(index)}
                    />
                    </td>
                  <td className="th"><h1 className="items" style={{
                    opacity : x.status ? 0.5 : 1 
                  }}>{x.title}</h1></td>
                  <td>{x.status}</td>

               
                  <td className="th2">
                  <button className='listbtn' onClick={(e)=>this.props.changeStatus('complete',index)}>Edit</button>
                  <button  className='listbtn' onClick={()=>this.deleteItem}>Delete</button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
         : null}{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {items}= state.todo
  return {
    items
  };
};
const mapDispatchToProps= (dispatch) =>{
 return{
  changeStatus: (payload,index) => dispatch(changeStatus(payload,index)),
  createToDo: (payload) => dispatch(createToDo(payload)),
  changeIndex: (index) => dispatch(changeIndex(index)),

 }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
