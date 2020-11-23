import { Component } from "react"
import RefsInput from "./RefsInput"

// import {Component} from 'react'
import React from 'react'

class ParentRef extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef()
    }
    clicked=()=>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
               <RefsInput ref={this.componentRef}/>
               <button onClick={this.clicked}>Click</button> 
            </div>
        )
    }
}

export default ParentRef
