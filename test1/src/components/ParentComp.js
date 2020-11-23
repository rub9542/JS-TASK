import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Abdul',
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Abdul'
            })
        },2000)
    }
    
    render() {
        console.log('**************************Parent Component ********************')
        return (
            <div>ParentComponent
            <MemoComp name={this.state.name}/>
                
            </div>
        )
    }
}

export default ParentComp
