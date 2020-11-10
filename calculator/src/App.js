// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class Elements extends Component {
  constructor(props){
    // let temp;
    // let operator;
    super(props);
    this.state=({
      number:this.props.number
    

    });
   
    this.InputAccept=this.InputAccept.bind(this);
    this.numberPad = this.numberPad.bind(this);
    this.addNum = this.addNum.bind(this);
    this.subNum = this.subNum.bind(this);
    this.divNum = this.divNum.bind(this);
    this.mulNum = this.mulNum.bind(this);
    this.addResult=this.addResult.bind(this);
    this.clear=this.clear.bind(this);
    
  }



    
    InputAccept(event){
      let number=event.target.value;
      if(number){
        this.setState({
          number:number

        });
      }

    }
    numberPad(value){
      this.setState({
        number:this.state.number+value
      })
    }
    addNum(){
       this.temp=this.state.number;
       this.operator='+';

       this.setState({
               
          number:'0'
        });
    }
    subNum(){
      this.temp=this.state.number;
      this.operator='-';

      this.setState({
               
        number:'0'
       });
    }
    divNum(){
    this.temp=this.state.number;
    this.operator='/';

    this.setState({
           
      number:'0'
     });
    }
    mulNum(){
      this.temp=this.state.number;
      this.operator='*';

      this.setState({
                  
        number:'0'
      });
    }
    clear(){
      this.temp='0';
      this.setState({
        number:'0'
      });
    }
   

    addResult(){
      if(this.operator==='+'){
      this.setState({
        number:parseInt(this.temp)+parseInt(this.state.number)
      });
      }
      if(this.operator==='-'){
        this.setState({
          number:parseInt(this.temp)-parseInt(this.state.number)
        });
      }
      if(this.operator==='/'){
        this.setState({
          number:parseInt(this.temp)/parseInt(this.state.number)
        });
      }
      if(this.operator==='*'){
        this.setState({
          number:parseInt(this.temp)*parseInt(this.state.number)
        });  
      }

        
    }
  

  
    render() {
      return (
        <div className='body'>
          <input type='text' onChange={this.InputAccept} className='numberinput'  value={this.state.number} placeholder="0"/>
       

        <div className='row1'>

          <button onClick={(event) => this.numberPad('1')}>1</button>
          <button onClick={(event) => this.numberPad('2')}>2</button>
          <button onClick={(event) => this.numberPad('3')}>3</button>
          <button onClick={this.subNum}>-</button>
        </div>
        <div className='row2'>
        <button onClick={(event) => this.numberPad('4')}>4</button>
        <button onClick={(event) => this.numberPad('5')}>5</button>
        <button onClick={(event) => this.numberPad('6')}>6</button>
        <button onClick={this.mulNum}>*</button>
        </div>
        <div className='row3'>
        <button onClick={(event) => this.numberPad('7')}>7</button>
        <button onClick={(event) => this.numberPad('8')}>8</button>
        <button onClick={(event) => this.numberPad('9')}>9</button>
        <button onClick={this.divNum}>/</button>

        </div>
        <div className='row4'>
        <button onClick={this.addNum} >+</button>
        <button onClick={(event) => this.numberPad('0')}>0</button>
        <button onClick={this.addResult}>=</button>
        <button onClick={this.clear}>clear</button>

        </div>


      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return(
      <div className='sector'>
        <Elements number={0}></Elements>
      </div>
    )
  }
}

export default App;