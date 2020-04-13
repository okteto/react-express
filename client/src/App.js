import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    logo: 'logo512.png'
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/logo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ logo: this.state.post }),
    });
    const body = await response.json()
    
    this.setState({ logo: body.logo });
  };
  
render() {
    return (
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
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Pick your logo:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;