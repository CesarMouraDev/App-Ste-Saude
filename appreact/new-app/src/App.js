import './App.css';
import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cesar Moura'
    };
  }
  
  render() { 
    const { name } = this.state;

    return (
    <div className="App">
     <h1 onClick={() => console.log("Cesar")}>
      {name}
      </h1>
    </div>
  );

  }
}

export default App;
