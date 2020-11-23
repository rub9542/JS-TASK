import React, { Component } from "react";
import "./list.css";
import { connect } from "react-redux";
import { createToDo } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      count: "not checked",
    };
    // this.renderList = this.renderList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.resetItem = this.resetItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    // this.sortItems = this.sortItems.bind(this);
  }

  deleteItem(index) {
    const newList = this.props.items.filter(
      (x) => this.props.items.indexOf(x) !== index
    );
    this.props.createToDo(newList);
  }
  checked = () => {
    // this.props
    this.setState({
      count: "complete",
    });
  };

  // renderList() {
  //   return <table className="table">
  //   <thead className="heading">
  //   <tr>
  //   <th className="th">Serial number</th>
  //   <th className="th">Name</th>
  //   <th className="th">Status</th>
  //   <th className="th">Actions</th></tr>
  //   </thead>
  //   <tbody>
  //   {this.props.items.map((x,index)=>(
  //     <tr key={index}>
  //   <td className="th">{index}
  //   </td>
  //   <td className="th">{x}</td>

  //   <td className="th"><input type="checkbox"  onChange={()=>this.checked(index)}/></td>
  //   <td>{this.state.count}</td>

  //   </tr>

  //   ))}

  //   </tbody>
  //   </table>

  //   // return this.props.items.map((item, index) => {
  //   //   return <div key={index}><h1>{item.title} </h1><button onClick={(event) => this.deleteItem(index)}>delete</button> </div>;
  //   // });
  // }

  addItem() {
    const newList = [...this.props.items, { title: this.state.text }];
    this.props.createToDo(newList);
    this.setState({
      text: "",
    });
  }

  // sortItems() {
  //   const newList = [...this.props.items].sort(function(a,b) {return (a.title.toLowerCase()<b.title.toLowerCase())?(-1):(1)});
  //   this.props.createToDo(newList);
  // }

  resetItem() {
    const newList = [];
    this.props.createToDo(newList);
  }

  render() {
    return (
      <div className="listbg">
        <input
          className="inputarea"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
        ></input>
        <button className="addbtn" onClick={this.addItem}>
          Add
        </button>
        <button className="reset" onClick={this.resetItem}>
          Reset
        </button>
        {this.props.items !== [] ? (
          <table className="table">
            <thead className="heading">
              <tr>
                <th className="th">Serial number</th>
                <th className="th">Name</th>
                <th className="th">Status</th>
                <th className="th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((x, index) => (
                <tr key={index}>
                  <td className="th">{index}</td>
                  <td className="th">{x.title}</td>

                  <td className="th">
                    <input
                      type="checkbox"
                      onChange={() => this.checked(index)}
                    />
                  </td>
                  <td>{this.state.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todo.items,
  };
};

export default connect(mapStateToProps, {
  createToDo,
})(TodoList);
