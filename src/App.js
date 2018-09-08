import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div>Hello, World!!</div>
//         <input type="text" onClick={() => {console.log("Hi")}} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>MEOW!!!!</div>
}

export default App;
