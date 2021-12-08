import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDom.render(
  // App 中，只要碰到容器组件，就会把 store 传进去，这样就不用碰到一个容器，就传一次 store 了
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);

// 监听，监听到 redux 数据变化，则重绘
// store.subscribe(() => {
//   ReactDom.render(<App/>, document.getElementById('root'));
// })
// react-redux 会自动帮我们监测 redux 的状态，然后通知 UI 组件重新渲染