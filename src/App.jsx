import React, { Component } from 'react'
import Count from './components/Count'
import CountContainer from './containers/CountWithRedux'

// 引入 redux 的 store
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <span>纯 react 版本</span>
        <Count/>
        <br/><br/>
        <span>react-redux 版</span>
        {/* 这里渲染的应该是容器组件，不应该是 UI 组件。store 通过 props 传递给容器组件 */}
        <CountContainer store={store}/>
      </div>
    )
  }
}
