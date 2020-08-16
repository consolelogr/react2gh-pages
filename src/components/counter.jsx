import React, { Component } from 'react';
import './styyli.css';

class Counter extends Component {

    componentDidUpdate(){
      console.log("app - componentDidUpdate");
    }
  render() {   
    return (

        <div className="wrappi">
          <div className={this.styyliChangee()}> {this.formatCount()}</div> 
          <button onClick={ () => this.props.onIncrement(this.props.counter) } 
          > ADD</button>
          <button onClick= { () => this.props.onDelete(this.props.counter.id)
          } className="deleteButton">DEL</button>
        </div> 
    );    
  }

  styyliChangee() {   
    let classes = "number";
    classes += this.props.counter.value  === 0 ? "" : "Changed";
    return classes ;
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? '0' : value;
  }
}
 
export default Counter;