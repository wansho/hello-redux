import React, { Component } from 'react'
// 引入 store，用于获取 redux 中保存状态
import store from '../../redux/store'

import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

export default class CountWithRedux extends Component {

  state = {carName: "凡尔赛 C5X"};

  /* componentDidMount(){
		//检测redux中状态的变化，只要变化，就调用render
		store.subscribe(()=>{
			this.setState({})
		})
	} */

  increment = () => {
    const {value} = this.selectNumber;
    // dispatch 用于向 redux 发送命令，手动创建的一个 action
    store.dispatch(createIncrementAction(value * 1));
  }

  decrement = () => {
    const {value} = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  }

  incrementByOdd = () => {
    const {value} = this.selectNumber;
    const sum = store.getState();
    if(sum % 2 !== 0){
      store.dispatch(createIncrementAction(value * 1));
    }
  }

  incrementByAsync = () => {
    const {value} = this.selectNumber;
    // 将该步骤封装成异步 action
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value * 1));
    // }, 500);
    // 注意，createIncrementAsyncAction 返回的是一个函数！不是一个 action json 对象
    store.dispatch(createIncrementAsyncAction(value*1, 500));
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
