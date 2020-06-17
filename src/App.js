import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';



class App extends Component{
    
    render(){
      return(
        <Router>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signUp" exact component={SignUp} />
          </div>
        </Router>
      )
    }
}

export default App;