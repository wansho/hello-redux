import React, { Component } from 'react'
import Count from './components/Count'
import CountWithRedux from './components/CountWithRedux'

export default class App extends Component {
  render() {
    return (
      <div>
        <span>纯 react 版本</span>
        <Count/>
        <br/><br/>
        <span>redux 完整版</span>
        <CountWithRedux/>
      </div>
    )
  }
}
