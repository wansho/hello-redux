import React, { Component } from 'react'

export default class Count extends Component {

  state = {sum: 0};

  increment = () => {
    const {sum} = this.state;
    const {value} = this.selectNumber;
    this.setState({sum: sum + value * 1.0});
  }

  subtract = () => {
    const {sum} = this.state;
    const {value} = this.selectNumber;
    this.setState({sum: sum - value * 1.0});
  }

  incrementByOdd = () => {
    const {sum} = this.state;
    const {value} = this.selectNumber;
    if(sum % 2 !== 0){
      this.setState({sum: sum + value * 1.0});
    }
  }

  incrementByAsync = () => {
    const {sum} = this.state;
    const {value} = this.selectNumber;
    setTimeout(() => {
      this.setState({sum: sum + value * 1.0});
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.sum}</h1>
        <select ref={ (currentNode) => this.selectNumber = currentNode}>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.subtract}>-</button> &nbsp;
        <button onClick={this.incrementByOdd}>当前求和为奇数再加</button> &nbsp;
        <button onClick={this.incrementByAsync}>异步加</button> &nbsp;
      </div>
    )
  }
}
