// import logo from './logo.svg';
import './components/todo.css';
import Nav from './components/nav';
import All from './components/All';
import Completed from './components/completed'
import Pending from './components/Pending';
import Todo from './components/Top';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sample from './components/count';
import { myTodo } from './Actions';
import  AllDel  from './components/AllDel';

function App() {
  return (<div style={{backgroundColor: '#f5f5f5'}} className='sample'>
    <p className='heading'>Todos</p>
      <div className='sample2'>
     
    <Todo/>
    <Router>
    <div className="App">
      
      <Switch>
        <Route path='/' exact component={All}/>
        <Route path='/completed' exact component={Completed} />
        <Route path='/pending' exact component={Pending} />
      </Switch>
      <div className='bottom'>
        <Sample/>
        <Nav/>
        <AllDel/>
      </div>
      
    </div>
    </Router>
    </div></div>
  );
}

export default App;
