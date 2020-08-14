import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import  Counters from './components/counters.jsx';
import main from './components/main.jsx';
import Counter from './components/counter';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  state = {
    counters:[
      {id:1, value: 5},
      {id:2, value: 0},
      {id:3, value: 0},
      {id:4, value: 0}
    ]  
    };


handleIncrement = counter => {
  const counters =[...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter};
  counters[index].value++;
  this.setState({counters});
}

handleReset = () => {
  const counters = this.state.counters.map (c => {
  c.value = 0;
  return c;
  });
  this.setState( {counters});
}

handleDelete = counterId =>  {
const counters = this.state.counters.filter(c => c.id !== counterId);
this.setState({counters}); 
};

render(){  
  return (
    <React.Fragment>
    <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}   />
    <main className="main"> 
    <Counters
      counters={this.state.counters}
       onReset={this.handleReset}
       onIncrement={this.handleIncrement}
       onDelete={this.handleDelete} 
     />
    </main>
    </React.Fragment>


  );
}
}

export default App;
