import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Hello, World!!</div>
        <input type="text" onClick={() => {console.log("Hi")}} />
      </React.Fragment>
    );
  }
}

export default App;
