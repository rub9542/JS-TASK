import React, { Component } from 'react'

export class loops extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:['thee', 'fortytwo', 'levels', 'hello'],
          search:'e',
        };
      }
      filter=()=>{
        let items=this.state.items
        for(let i=0;i<items.length; i++){
          for(let j=0; j<items[i].length;j++){
            if(items[i][j]==='e'){
              
              console.log( items[i])
              
            }
    
          }
        }
        // let newlist=items.filter(item=> item.includes(this.state.search))
        // let newlist= items.filter((item)=>(
        //  item.indexOf(this.state.search) !== -1
        // ));
        // this.setState({
        //   items:newlist
        // })
      }
    
    
      render() {
        
        return (
          <div className="App">
            {/* <ul>
              {filterdata.map((item,index) =>{
                return{
                  <li key={index}>{item}</li>
                }
                
              })}
    
            </ul> */}
            <ul>
              {this.state.items.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button onClick={this.filter}>filter</button>
          </div>
        );
      }
}

export default loops
