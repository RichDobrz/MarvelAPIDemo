import React, { Component } from 'react';
import Home from "./components/Home"
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="router-main">
            <Route path="/" component={Home} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
