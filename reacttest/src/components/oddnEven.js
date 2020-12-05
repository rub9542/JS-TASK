import React, { Component } from 'react'

export class Even extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18]
        }
    }
    check=()=>{
        let list= this.state.list;
        let length= list.length;
        for(let i=0; i<length;i++){
            if(list[i]%2===0){
                console.log('even',list[i])
            }else{
                console.log('odd',list[i])
            }
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.check}>Check</button>
            </div>
        )
    }
}

export default Even
