import React, { Component } from 'react';

import './App.css';

// class InputBox extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       note:""
//     }
//   }
//   // assignInput(userinput){

//   //   this.setState({
//   //     note:
//   //   })
//   // }



//   render(){
//     return(

//       <div className='input1'>
//         <div>
//         <input value={this.state.value} onChange={(event) => this.setState({note: event.target.value})} type='text'/>
//         <button onClick= {() => this.props.takeContext(this.state.note)}>Add</button>
//         </div>
       
//       </div>

//       // <div>
//       //   <input type='checkbox'/>
//       // </div>

//     );
//   }

// }

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       text: ""
//     }
//     this.bringList=this.bringList.bind(this)
  
//   }
//   bringList(value){
//     this.setState({
//       text: value
//     })

//   }

//   render() {
//     return (
//       <div className="App">
//         <div className='listbox'>
//           <InputBox takeContext={this.bringList}/>
//           <div>
//             <input type='checkbox'/>
            
//           <h1> {this.state.text}</h1>
//           </div>
        
//         </div>
       
//         </div>
      
//     );
//   }
// }

// export default App;




class Box extends Component {
  constructor(props) {
    super(props);
    
    this.state =
      {
        count :1,
        color: '#ffffff',
        disabled: false,
        
        
      
      };
   this.checkValue=this.checkValue.bind(this)
  }
  

  

  checkValue(useranswer){
    if(this.props.answer == useranswer)
    {
      this.setState(
        {
          color:'blue',
          disabled: true

        }
      );
      this.number=useranswer

    }
   else if(this.props.answer != useranswer && useranswer!=''){
     this.props.wrongturn();
     if(this.state.count == 1)
      {
        this.setState(
          {
            color:'green',
            count:2
            // incorrects:1
          }
        );
        alert('u r wrong')

      }

      else if(this.state.count == 2)
      {
        this.setState(
          {
            color:'yellow',
            count:3
            // incorrects:
          }
        )

      }

      else if(this.state.count == 3)
      {
        this.setState(
          {
            color:'red',
            count:4,
            disabled :true
          }
        )

      }
   
    }
    
     
  }




  render(){
    return (
        <div className='grid-box'>
          {this.props.number ? (
            <div className='Box' > {this.props.number}</div>
          ) : (

                  <input type='text' value={this.state.value} style={{backgroundColor:this.state.color}} 
                  onChange={(event)=> this.checkValue(event.target.value)}  disabled={(this.state.disabled)? 'disabled':''} maxLength={1} />
                )
          }
        </div>
      );


    
}
}



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      incorrects:0
    }
    this.increment=this.increment.bind(this);
  }
  increment(){
    this.setState({
      incorrects:this.state.incorrects+1
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="line">
            <div className="Box1-row">

              <Box classNAme='number1' number={3} />
              <Box answer={1} wrongturn={this.increment}/>
              <Box answer={4} wrongturn={this.increment} />
              <Box classNAme='number1'number={2} />
            </div>
        
            <div className="Box1-row">
              <Box answer={2} classNAme='number2' wrongturn={this.increment}/>
              <Box number={4} classNAme='number1'/>
              <Box number={1} classNAme='number1'/>
              <Box answer={3} classNAme='number2' wrongturn={this.increment}/>

            </div>
          </div>
          <div className="line">
            <div className="Box1-row">
              <Box answer={1} classNAme='number2' wrongturn={this.increment}/>
              <Box number={3} classNAme='number1'/>
              <Box number={2} classNAme='number1'/>
              <Box answer={4} classNAme='number2' wrongturn={this.increment}/>

            </div>
        
            <div className="Box1-row">
              <Box number={4} classNAme='number1'/>
              <Box answer={2} classNAme='number2' wrongturn={this.increment}/>
              <Box answer={3} classNAme='number2' wrongturn={this.increment}/>
              <Box number={1} classNAme='number1'/>
            </div>
          </div>
        </div>
        <h1>incorrect answers:{this.state.incorrects}</h1>
      </div>
    );
  }
}

export default App;