import React, { Component } from 'react'

export class Number extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: [11, 22, 3, 6, 44, 4, 8,] 
        }
    }
    check=()=>{
        let number=this.state.number;
        let max=0;
        let min=number[0];
        for(let i=0; i<number.length-1; i++){
            if(number[i]> max){
                max=number[i]
                // console.log(number[i])

            }

        }
        // min=max;
        for(let i=0; i<number.length-1; i++){
            if(number[i]< min){
                min=number[i]
                // console.log('max',number[i])
            }
        }
        console.log('max',max)
        console.log('min',min)

    }
    
    render() {
        return (
            <div>
                <button onClick={this.check}>check</button>
            </div>
        )
    }
}

export default Number
