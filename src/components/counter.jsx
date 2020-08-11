import React, { Component } from 'react';
import './styyli.css';

class Counter extends Component {
  state = {
    value: this.props.value,
    count: 0
  };

  
  handleIncrement = product => {
    this.setState( {count: this.state.count+1} ) ;
  }

  
render() {   
    return ( 
        <div className="wrappi">
        <span className={this.styyliChangee()}> {this.formatCount()}</span> 
        <button onClick={ () => {this.handleIncrement()}} > BUTTON</button>
      </div> 
    );   
  }

  styyliChangee() {   
    let classes = "spanni";
    classes += this.state.count === 0 ? "" : "Tiukka";
    return classes ;
  }

  formatCount() {
    
    const {count} = this.state;
      return count === 0 ? '0' : count;
  }
}
 
export default Counter;