import React, { Component } from 'react'

export class Strings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             abc:'google',
             bbc:['elgoog','youtube','facebook']
        }
    }
    check=()=>{
        const items= this.state;
        let arr='';
        let length = items.abc.length-1
       for(let i= length; i>=0;i--){
        //    if(items.abc[i]== items[bbc[]])
        arr=arr+(items.abc[i])
        }
        for(let i=0;i<items.bbc.length;i++){
            if(items.bbc[i]===arr){
                console.log('matched', items.bbc[i])
            }
            else{
                console.log('not matched',items.bbc[i])
            }
        }
        
    //    console.log(arr);
    }
    render() {
        
        
        return (
            <div>
                <button onClick={this.check}>check</button>
            </div>
        )
    }
}

export default Strings
