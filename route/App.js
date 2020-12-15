// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import All from './components/All';
import Completed from './components/completed'
import Pending from './components/Pending';
import Add from './components/Top';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (<div>
    <Add/>
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/' exact component={All}/>
        {/* <All/> */}
        <Route path='/completed' exact component={Completed} />
        <Route path='/pending' exact component={Pending} />
      </Switch>
      {/* <Pending/> */}
    </div>
    </Router>
    </div>
  );
}

export default App;
