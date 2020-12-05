import React, { Component } from 'react'

export class Sum extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19],
             item:'',
        }
    }
    check=()=>{
        let list=this.state.list;
        let item=12;
        console.log('clicked', item)
        let length=list.length;
        let left=0;
        let right=length-1;
        // while(left<right){
        //     if(list[left] + list[right] ===item){ 

        for(let i=0; i<length-1;i++){
            for(let j=i+1; j<length;j++){
                if(list[i]+list[j] === item){
                
                    console.log('working',list[i],list[j])
                }
            // console.log('j is working',)
         }
            // console.log('i is working',i)
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.item} onChange={(event)=>this.setState({item:event.target.value})}/>
                <button onClick={this.check}>Check</button>
            </div>
        )
    }
}

export default Sum
