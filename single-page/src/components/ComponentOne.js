// rename file as needed
import React, { Component } from 'react'


class ComponentOne extends Component {
    constructor(props){
      super(props)
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