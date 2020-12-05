import React, { Component } from 'react'

export class Multiples extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:1,
        }
    }
   check=()=>{
       let text= this.state.text;
       for(let i=1;i<=text;i++){
        //    console.log(i)
           if(i%3===0 && i%5===0 ){
               console.log(' multiple of 3 and 5', 3*5)
           }
           if(i%3!==0 && i%5!==0 ){
            console.log(' not multiple of both 3 and 5',  i)
           }
           if(i%3===0 && i%5!==0 ){
                console.log(' multiple of 3 but not 5', 3)

           }
           if(i%3!==0 && i%5===0 ){
            console.log(' multiple of 5 but not 3', 5)

       }

       }
   } 
    render() {
        return (
            <div>
                <input value={this.state.text} onChange={(event)=>this.setState({text:event.target.value})}/>
                <button onClick={this.check}>Check</button>
            </div>
        )
    }
}

export default Multiples
