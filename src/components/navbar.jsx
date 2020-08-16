import React, { Component } from 'react';


class navbar  extends Component {
  render() { 
    return (  

      <nav className="navbar">
        <span className="navbarSpan">
        <span className="topSpan">React2gh-pages<br /></span>

         Counters: {this.props.totalCounters} 
        </span>
        
      </nav>

    ); // end return
  }
}
 

export default navbar;