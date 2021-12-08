import React, { Component } from 'react'
import CountContainer from './containers/CountWithRedux'

export default class App extends Component {
  render() {
    return (
      <div>
        <span>react-redux 版</span>
        {/* 这里渲染的应该是容器组件，不应该是 UI 组件。store 通过 props 传递给容器组件 */}
        <CountContainer/>
      </div>
    )
  }
}
