import React, { Component } from 'react'

export class Sort extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             arr:[1,9,2,8,7,3,4,5,6,199,77,88,99],
             text:0,
        }
    }
    Sort=()=>{
        const arr=this.state.arr;
        let b=this.state.text;
        let c=arr.length - b;
        let status=false;
        while(!status){
            status=true;
            for(var i=1; i<arr.length; i++){
                if(arr[i-1] > arr[i]){
                    status=false;
                    var a=arr[i-1];
                    arr[i-1]=arr[i];
                    arr[i]= a;
                }
            
        }
        }    
            
        // const action= 1;
        
        console.log('sorted array',arr)
        console.log('result',arr[c])

    }
    
    render() {
        return (
            <div>
                <input value={this.state.text} onChange={(event)=>this.setState({text:event.target.value})}/>
                <button onClick={this.Sort}>Sort</button>
            </div>
        )
    }
}

export default Sort
