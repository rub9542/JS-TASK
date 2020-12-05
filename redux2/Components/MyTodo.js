import React, { Component } from 'react'
import {connect} from 'react-redux';
import {myTodo, statuschange} from '../actions/index'


export class MyTodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:'',
        }
    }
    addText = () =>{
        let newList = [...this.props.items,{title:this.state.text, status:'incomplete'}];
        // newList.push()
        this.props.myTodo(newList);
        this.setState({
            text:'',
        })
    }
    statuschange=(index)=>{
        let newList=this.props.items;
        if(newList[index].status ==='incomplete'){
            newList[index].status ='complete';
            console.log('status clicked complete',newList[index].status);
            let ss= newList.splice(index,1);
            newList.push(ss[0]);
            this.props.myTodo(newList);

        }
        else{
            newList[index].status =' incomplete';
            console.log('status clicked incomplete');
            let ss= newList.splice(index,1);
            newList.unshift(ss[0]);
            console.log('element spliced', ss, newList);
            this.props.myTodo(newList);
        }
        
    }
    render() {
        return (
            <div>
                <input value={this.state.text} onChange={(event)=>this.setState({text:event.target.value})}/>
                <button onClick={this.addText}>add</button>
                {this.props.items !==[] ?
                
                <table>
                    <thead>
                        <tr>
                            <td>Serial</td>
                            <td>Items</td>
                            <td>Checkbox</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((x,index)=>(
                            <tr key={index}>
                             <td>{index+1}</td>
                        <td>{x.title}</td>
                             <td>
                                 <input 
                                 type='checkbox'
                                 checked={x.status=== 'Complete'}
                                 onChange={()=>this.statuschange(index)}
                                 />
                             </td>
                        <td>{x.status}</td>                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            : null}
                
            </div>
        )
    }
}
const mapStateToProps = state=>{
    // const {items} = state.todoReducer
    return{
        items:state.todo.items
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        myTodo :(payload) => dispatch(myTodo(payload)),
        statuschange:(payload,index) => dispatch(statuschange(payload,index))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)( MyTodoList)
