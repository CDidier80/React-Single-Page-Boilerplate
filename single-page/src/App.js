import React, { Component } from 'react'
import './styles/App.css';
import ComponentOne from 'ComponentOne'
import ComponentTwo from 'ComponentTwo'


class App extends Component {
  constructor(){
    super()
    this.state = {
        key: value
    }
  }

  // Optional - set the initial state
  // componentDidMount (){
  //   try {
  //       this.setState((prevState) => ({
  //          // set initial state
  //       }))
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }

  render() {
    return (
    <main className="appContentWrapper">
        <ComponentOne />
        <ComponentTwo />
    </main>
    )}
  }

  export default App




// Option 2: functional-component version 

// function App() {
//   return (
//     <main className="appContentWrapper">
//         <ComponentOne />
//         <ComponentTwo />
//     </main>
//   )
// }

// export default App;
