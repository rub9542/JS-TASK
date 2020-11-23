// import React, { Component } from 'react';
// import axios from 'axios';
// // import Data from './frame';
// // import logo from './logo.svg';
// import './App.css';

// export default class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       info:[]
//     }
//   }y

//   getData(){
//     console.log('got it man');
//     axios.get('https://gorest.co.in/public-api/users?_format=json&access-token=Nq66HfuEASbhLYSeGYXA_Lo88rg10C3LmfZb')
//     .then(res=>res.data)
//     .then(data =>{
//       this.setState({
//         info:data.result
//       })
//     })
//   }
//   componentDidMount(){
//     this.getData()
//   }
//   render(){
//     const x=this.state.info;
//     console.log(x)
//     return(
//       <div className='card'>
//         {/* <Data key={}/> */}
//         {this.state.info.map((item,index)=>(
//           <div key={index}>
//             <p>{item.first_name} {item.last_name}</p>
//             <p>{item.gender}</p>
//             <p>{item.phone}</p>
//             <img src={item._links.avatar.href} style={{width:'100px',height:'100px'}} alt='image'/>
//           </div>
//         ))}


//       </div>
//     )
//   }
// }


//   const x = this.state.text;
//   console.log(x);
//   return (
//     <div className="App">
//       {this.state.text.map((item,index)=>(
//         <div key={index}>
//           <p>{item.first_name} {item.last_name}</p>
//           <img src={item._links.avatar.href} style={{width:"100px", height:"100px"}} alt="Image"/>
//           <p>{item.email}</p>
//           <p>{item.phone}</p>
//       <p>{item.dob}</p>
// <p>{item.website}</p>
// <p>{item.address}</p>
// <button onClick={() => this.deleteData(index)}>remove</button>
// {/* <p>{item.}</p> */}
//           {/* <p>lastname:{item.last_name}</p> */}
//         </div>
//       ))}   
//     </div>
//   )
  
// }
// }










import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:[],
    }
  }
  deleteData(index){
    const data= this.state.text.filter((i,j) => (j !==index))
    console.log('done')
    this.setState({
      text:data
    })
  }
  getData(){
    console.log('its working');
    axios.get('https://gorest.co.in/public-api/users?_format=json&access-token=xNA_MNBMLtKd0CsyxOI8zkCDU5k9-HpLvDC5')
    .then(res => res.data )
    .then(data => {
      this.setState({
        text: data.result
      })
    })
  }
  componentDidMount(){
    this.getData()
  }

  render() {
    const x = this.state.text;
    console.log(x);
    return (
      <div className="App">
        <div className='card'> 
        {this.state.text.map((item,index)=>(
          <div key={index} className='id' >
            <p>{item.first_name} {item.last_name}</p>
            <img  src={item._links.avatar.href}  style={{width:"100px", height:"100px"}} alt=""/>
            <p>{item.gender}</p>
            <p>{item.phone}</p>
        <p>{item.dob}</p>
  <p>{item.website}</p>
  <p>{item.address}</p>
  <button onClick={() => this.deleteData(index)}>remove</button>
        </div>
        
 
          
        ))}
        </div>   
      </div>
    )
    
  }
}


