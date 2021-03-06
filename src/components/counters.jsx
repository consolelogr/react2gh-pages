import React, { Component } from 'react';
import Counter from "./counter.jsx";

function refreshPage() {
  window.location.reload(false);
}

class Counters extends Component {
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

  render() {  
    return (
       
      <div>
        <div className="resetReload">
        <button onClick={this.props.onReset} className="resetReloadButton"> RESET </button>
        <button onClick={ () => window.location.reload(false)} className="resetReloadButton"> RELOAD </button>
        </div>


        {this.props.counters.map(counter => ( 
          <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete}
            onIncrement = {this.props.onIncrement} 
            //svalue={counter.value}
            counter = {counter}
          />
         ))
         };

      </div>
    );
  }

}
 
export default Counters;