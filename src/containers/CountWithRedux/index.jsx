// 容器组件!!!

import React, { Component } from 'react'
// 引入 connect 用于连接 UI 组件和 redux
import {connect} from 'react-redux'
import {
  createIncrementAction, 
  createDecrementAction, 
  createIncrementAsyncAction
} from '../../redux/count_action'

class CountWithRedux extends Component {

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
    const sum = this.props.sum;
    console.log(sum);
    if(sum % 2 !== 0){
      this.props.increment(value * 1);
    }
  }

  incrementByAsync = () => {
    const {value} = this.selectNumber;
    this.props.incrementAsync(value * 1, 1000);
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

// 映射状态
const mapStateToProps = (state) => ({sum: state})

// 映射操作状态的方法
// 实际上，dispatch 也重复了，可以去掉，交给 react-redux 去做
// const mapDispatchToProps = (dispatch) => ({
//   increment: (data) => {
//     dispatch(createIncrementAction(data));
//   },
//   decrement: (data) => {
//     dispatch(createDecrementAction(data));
//   },
//   incrementAsync: (data, delay) => {
//     dispatch(createIncrementAsyncAction(data, delay));
//   }
// })
// mapDispatchToProps 可以传两种值，一种是函数，一种是对象

// react-redux 会帮我们创建一个容器组件，然后将 redux 中的状态和操作状态的方法，放入 props 中传给 UI 组件。
// 这样 UI 组件只需要从 props 中获取 redux 状态和操作状态的方法
const CountContainer = connect(mapStateToProps, {
  // 调用方法后，只生成 action，dispatch 交给 react-redux 来做！
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync: createIncrementAsyncAction
})(CountWithRedux);

// 暴露容器组件
export default CountContainer;
