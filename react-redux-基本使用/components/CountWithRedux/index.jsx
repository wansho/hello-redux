import React, { Component } from 'react'

export default class CountWithRedux extends Component {

  state = {carName: "凡尔赛 C5X"};

  increment = () => {
    const {value} = this.selectNumber;
    this.props.increment(value * 1);
  }

  decrement = () => {
    const {value} = this.selectNumber;
    this.props.decrement(value * 1);
  }

  incrementByOdd = () => {
    const {value} = this.selectNumber;
    const sum = this.props.state;
    if(sum % 2 !== 0){
      this.props.increment(value * 1);
    }
  }

  incrementByAsync = () => {
    const {value} = this.selectNumber;
    this.props.incrementAsync(value * 1, 500);
  }

  render() {

    console.log('ui 组件接收到的 props: ', this.props);

    return (
      <div>
        <h1>当前求和为：{this.props.sum}</h1>
        <select ref={ (currentNode) => this.selectNumber = currentNode}>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementByOdd}>当前求和为奇数再加</button> &nbsp;
        <button onClick={this.incrementByAsync}>异步加</button> &nbsp;
      </div>
    )
  }
}
