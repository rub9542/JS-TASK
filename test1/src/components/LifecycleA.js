import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Abdul'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getderivedstatefromprops')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentdidmount')
        // return null
    }
    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }
    clicked =() =>{
        console.log('clicked')
        this.setState({
            name:'Changed'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div><div>LifecycleA</div>
            <button onClick={()=>this.clicked()}>Button</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
