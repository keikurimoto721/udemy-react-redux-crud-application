import React from 'react';
import PropTypes from 'prop-types';

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

  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hana", age: 25 },
    { name: "Non"}
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age}/>;
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I'm {props.name}!!, and {props.age} years old!!</div>
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
