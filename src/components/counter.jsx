import React, { Component } from 'react';
import './styyli.css';

class Counter extends Component {
  state = {
    count: 1,
  };

  
  handleIncrement = (product)  => {
    console.log(product);
    this.setState( {count: this.state.count+1} ) ;
  }

doHandleIncrement = (product) => {
  
  this.handleIncrement({ id: 1});
}
  
render() {   
    return ( 
        <div className="wrappi">
        <span className={this.styyliChangee}>{this.formatCount()}</span> 
        <button onClick={this.doHandleIncrement}>BUTTON</button>
      </div> 
    );   
  }

  styyliChangee() {   
    let classes = "spanni spanni";
    classes += this.state.count === 0 ? "" : "Tiukka";
    return classes;
  }

  formatCount() {
    
    const {count} = this.state;
      return count === 0 ? 'zero' : count;
  }
}
 
export default Counter;