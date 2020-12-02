import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    // this.takeInput = this.takeInput.bind(this);
    this.sendInput = this.sendInput.bind(this);
  }

  takeInput(value) {
    this.setState({
      text: value
    });
  }

  sendInput(){
    this.props.takeContext(this.state.text);
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div className="main-input">
        <div className="inputHolder">
          <textarea
            type="text"
            onChange={event => this.takeInput(event.target.value)}
            className="box"
            placeholder="Enter your Note"
            maxLength={240}
            value={this.state.text}
          />
          <button
            type="submit"
            onClick={this.sendInput}
            className="button"
          >
            Add
          </button>
        </div>
        {/* <div className="character">
          Total characters: {240-((this.state.text).length)}
        </div> */}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      items:[
        {title:'one', status:'incomplete'},
        {title:'two', status:'incomplete'},
        {title:'three', status:'incomplete'},
      ],
      search:'r',
    };
    this.displayText = this.displayText.bind(this);
  }

  displayText(text) { 
    this.setState({
      note: text,
      items: [...this.state.items,{title:text, status:'incomplete'}]
     
    });
  }

 statusChange=(index)=>{
   let newList = this.state.items
   if(newList[index].status=== 'incomplete'){
    newList[index].status='complete';
    console.log('status clicked');
    let ss=newList.splice(index,1);
    newList.push(ss[0]);
    console.log('element spliced', ss, newList);
  }
    else{
      newList[index].status='incomplete';
      console.log('status clicked');
      let ss=newList.splice(index,1);
      newList.unshift(ss[0]);
      console.log('element spliced', ss, newList);
    }
    this.setState({
      items:newList
    })

 }

// statusChange=(index)=>{
//   let newList = this.state.items
//   console.log('status clicked')
//   let ss=newList.splice(index,1)
//   newList.push(ss[0])
//   console.log('element spliced', ss, newList)
//   // console.log('spliced', newList)
//   this.setState({
//     items:newList
//   })


// }
  render() {
   
    return (
      <div className="App">
        <InputBox takeContext={this.displayText} />
        {this.state.items.map((item,index)=>(
          <li key={index}>{item.title}</li>
        ))}
       <table className='table'>
         <thead>
           <tr>
             <td><h1>Serial Number</h1></td>
             <td><h1>Items</h1></td>
             <td><h1>Checkbox</h1></td>
             <td><h1>Status</h1></td>
           </tr>
         </thead>
         <tbody>
           {this.state.items.map((item,index)=>(
             <tr key={index} style={{ opacity :item.status ==='complete' ? 0.5 : 1}}>
               <td>{index}</td>
               <td>{item.title}</td>
             <td>
               <input
                type='checkbox' 
             
             checked={item.status=== 'complete'}
            //  style={{ opacity :item.status =='complete' ? 0.5 : 1}}
             onChange={()=>this.statusChange(index)} />
             </td>
           <td>{item.status}</td>
             </tr>
           ))}
         </tbody>
       </table>
      </div>
    );
  }
}

export default App;

