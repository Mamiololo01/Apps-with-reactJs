import { render } from "@testing-library/react";
import React, { Component, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);

};

return (
    <div>
    <h2>Counter app</h2>
        <button onClick={increment}>Clicked{count}times</button>
      </div>
  );

};



  export default App;



//class App extends Component {

//  state = {
//    count: 0
//  };

//  increment = () => {
//    this.setState({
//      count: this.state.count + 1

//    });
//  };

//  render() {
//    return (
//    <div>
//      <h2>Counter app</h2>
//      <button onClick={this.increment}>clicked{this.state.count}times</button>
//    </div>
//    );
//  }



// };




