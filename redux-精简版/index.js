import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDom.render(<App/>, document.getElementById('root'));

// 监听，监听到 redux 数据变化，则重绘
store.subscribe(() => {
  ReactDom.render(<App/>, document.getElementById('root'));
})
