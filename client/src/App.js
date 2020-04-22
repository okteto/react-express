import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {logo: ''};  
  
  componentDidMount(){
    fetch('/api')
    .then(r => r.json())
    .then(b => this.setState({logo: b.logo}))
  }


  render(){
    return(
    <div className="App">
      <header className="App-header">
      <img src={this.state.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>);
  }
}

export default App;
