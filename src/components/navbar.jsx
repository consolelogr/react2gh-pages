import React, { Component } from 'react';


class navbar  extends Component {
  render() { 
    return (  

      <nav className="navbar">
        <span className="navbarSpan">
         Counters: {this.props.totalCounters} 
        </span>
        <a className="navbarLinks"href="#">
        </a>
      </nav>

    ); // end return
  }
}
 

export default navbar;