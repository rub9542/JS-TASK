import React, { Component } from 'react'

export class Duplicates extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[12, 3, 6, 22, 11, 10, 12, 6, 9, 2, 7, 77]
        }
    }
    check=()=>{
        const list= this.state.list;
        let aa=list.length-1
        
        for(let i=0; i<aa; i++){
            for(let j=0; j<aa; j++){
                if(i!==j){
                    if(list[i]===list[j]){
                        console.log('duplicate element', list[i])
                    }
                }
            }

           
    }}
    render() {
        return (
            <div>
                <button onClick={this.check}>check</button>
            </div>
        )
    }
}

export default Duplicates
