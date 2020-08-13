import React, { Component } from 'react';
import './styyli.css';

class Counter extends Component {

  render() {   
    return (

        <div className="wrappi">
          <span className={this.styyliChangee()}> {this.formatCount()}</span> 
          <button onClick={ () => this.props.onIncrement(this.props.counter) } 
          > more</button>
          <button onClick= { () => this.props.onDelete(this.props.counter.id)
          } className="deleteButton">DEL</button>
        </div> 
    );    
  }

  styyliChangee() {   
    let classes = "spanni";
    classes += this.props.counter.value  === 0 ? "" : "Tiukka";
    return classes ;
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? '0' : value;
  }
}
 
export default Counter;