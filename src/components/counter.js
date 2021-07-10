import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span className={this.getCounterClass()}> {this.formatCount()} </span>
        <button className="button__incr">Increment</button>
      </div>
    );
  }

  getCounterClass() {
    let countClass = 'format_counter';
    countClass += this.state.count === 0 ? '__zero' : '';
    return countClass;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'zero' : count;
  }
}

export default Counter;
