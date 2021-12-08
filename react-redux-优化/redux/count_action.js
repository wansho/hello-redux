/**
 * 对 action 进行封装, 专门为组件生成 action 对象
 */

import { INCREMENT, DECREMENT } from "./constant";

// 同步 action 是一个对象
export const createIncrementAction = (data) => ({type: INCREMENT, data});

export const createDecrementAction = (data) => ({type: DECREMENT, data});

// 异步 action 是一个函数，异步 action 中一般都会调用同步 action，异步 action 不是必须要用的。
export const createIncrementAsyncAction = (data, delay) => {
  // 把这个函数交给 store，store 调用的时候，会传入一个 dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data * 1));
    }, delay);
  }
}