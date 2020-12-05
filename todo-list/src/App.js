import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

// class InputBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     };
//     // this.takeInput = this.takeInput.bind(this);
//     this.sendInput = this.sendInput.bind(this);
//   }

//   takeInput(value) {
//     this.setState({
//       text: value
//     });
//   }

//   sendInput(){
//     this.props.takeContext(this.state.text);
//     this.setState({
//       text: ""
//     });
//   }

//   render() {
//     return (
//       <div className="main-input">
//         <div className="inputHolder">
//           <textarea
//             type="text"
//             onChange={event => this.takeInput(event.target.value)}
//             className="box"
//             placeholder="Enter your Note"
//             maxLength={240}
//             value={this.state.text}
//           />
//           <button
//             type="submit"
//             onClick={this.sendInput}
//             className="button"
//           >
//             Add
//           </button>
//         </div>
//         {/* <div className="character">
//           Total characters: {240-((this.state.text).length)}
//         </div> */}
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      item1:[
        {id:111, name:'Ashish', profile: 'Software Developer '},
        {id:112, name:'Abdul', profile: 'Lawyer '},
        {id:113, name:'Ankur', profile: 'Docter '},
        {id:114, name:'Vinayak', profile: 'Police '},
        {id:115, name:'Vivek', profile: 'Soldier '}
      ],
      item2:[
        {id:111, name:'Ashish', profile: 'Software Developer '},
        {id:222, name:'Irfan', profile: 'Mechanic '},
        {id:113, name:'Ankur', profile: 'Docter '},
        {id:224, name:'Sooraj', profile: 'Chef'},
        {id:115, name:'Vivek', profile: 'Soldier '}
      ],
      // search:'r',
    };
  }

  check=()=>{
    let item1= this.state.item1;
    let item2= this.state.item2;
    console.log('item1',item1);
    console.log('item2',item2);
    for(let i=0; i<item1.length; i++){
      for(let j=0; j<item2.length; j++){
        if(item1[i].id===item2[j].id){
          console.log('matched',item1[i])
          item1.splice(i,1);
          console.log('i==j',item1)
        }else{
          // console.log('splice',item1[i])
        }
      }
    }
  }







  // displayText=(text)=> { 
  //   this.setState({
  //     note: text,
  //     items: [...this.state.items,{title:text, status:'incomplete'}]
     
  //   });
  // }

//  statusChange=(index)=>{
//    let newList = this.state.items
//    if(newList[index].status=== 'incomplete'){
//     newList[index].status='complete';
//     console.log('status clicked');
//     let ss=newList.splice(index,1);
//     newList.push(ss[0]);
//     console.log('element spliced', ss, newList);
//   }
//     else{
//       newList[index].status='incomplete';
//       console.log('status clicked');
//       let ss=newList.splice(index,1);
//       newList.unshift(ss[0]);
//       console.log('element spliced', ss, newList);
//     }
//     this.setState({
//       items:newList
//     })

//  }

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
        {/* <InputBox takeContext={this.displayText} />
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
             onChange={()=>this.statusChange(index)} />
             </td>
           <td>{item.status}</td>
             </tr>
           ))}
         </tbody>
       </table> */}
       <button onClick={this.check}>Check</button>
      </div>
    );
  }
}

export default App;

