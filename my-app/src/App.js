import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    this.increment()
  }

  increment = () => {
    setInterval(
      () => {
        if(this.state.count < 10)
          return this.setState({  count: this.state.count + 1 })
        else
          return this.setState({  count: 0 })
      },
      1000
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.count}</h1>
        </header>
      </div>
    );
  }
}

export default App;
