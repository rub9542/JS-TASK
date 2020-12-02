import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:['thee', 'fortytwo', 'levels', 'hello'],
      search:'e',
    };
  }
  filter=()=>{
    let items=this.state.items
    let newlist= items.filter((item)=>(
     item.indexOf(this.state.search) !== -1
    ));
    this.setState({
      items:newlist
    })
  }


  render() {
    
    return (
      <div className="App">
        {/* <ul>
          {filterdata.map((item,index) =>{
            return{
              <li key={index}>{item}</li>
            }
            
          })}

        </ul> */}
        <ul>
          {this.state.items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={this.filter}>filter</button>
      </div>
    );
  }
}

export default App;

