import React, { Component } from 'react'

export class Common extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list1:[1, 2, 3, 55, 7, 6],
             list2: [7, 1, 88, 9, 6, 3, 2, 11, 85],
        }
    }
    check=()=>{
        console.log('clicked')
       const list1=this.state.list1;
       const list2=this.state.list2;
    for( let i=0; i<list1.length-1; i++){
        for( let j=0; j<list2.length-1; j++){
            if(list1[i]===list2[j]){
                console.log('duplicate elements', list1[i])
            }
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

export default Common
