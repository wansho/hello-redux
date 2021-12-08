// 容器组件!!!

// 引入 Count 的 UI 组件
import CountUI from '../../components/CountWithRedux'

// 引入 connect 用于连接 UI 组件和 redux
import {connect} from 'react-redux'

import {
  createIncrementAction, 
  createDecrementAction, 
  createIncrementAsyncAction
} from '../../redux/count_action'

// mapStateToProps 函数返回的是一个对象
// 作为状态传递给了 UI 组件，等价于 <CountUI xxx=xxx/>
// mapStateToProps 用于传递状态
const mapStateToProps = (state) => {
  // 返回对象的 key 就作为传给 UI 组件 props 中的 key;
  // 返回对象的 value 就作为传给 UI 组件 props 中的 value；
  return {sum: state};
}

// mapDispatchToProps 函数返回的是一个对象
// 作为操作状态的方法，传递给了 UI 组件
// 
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => {
      // 通知 redux 执行加法
      dispatch(createIncrementAction(data));
    },
    decrement: (data) => {
      dispatch(createDecrementAction(data));
    },
    incrementAsync: (data, delay) => {
      dispatch(createIncrementAsyncAction(data, delay));
    }
  }
}

// react-redux 会帮我们创建一个容器组件，然后将 redux 中的状态和操作状态的方法，放入 props 中传给 UI 组件。
// 这样 UI 组件只需要从 props 中获取 redux 状态和操作状态的方法
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

// 暴露容器组件
export default CountContainer;
