import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/Users";


class App extends Component {
  
  render(){

    return (
      <div className="App">
      <Navbar title= "Github User"/>
      <div className="container">
      <Users/>
      </div>
     
      </div>
    
    );

  }
}

export default App;
