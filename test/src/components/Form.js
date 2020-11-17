import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             password:'',
        }
    }
    
    render() {
        return (
            <Form>
            <div>
            <label>Username</label>
            <input type='text' value={this.state.Username} onChange={(event)=> this.setState({Username:event.target.value})}/>
            </div>
            <div>
                <label>Password</label>
                <select>
                <option>react</option>
                <option>Angular</option>
                <option>Laravel</option>
                </select>
            </div>
            </Form>
                
        )
    }
}

export default Form
