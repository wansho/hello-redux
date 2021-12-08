/* 
	该文件专门用于暴露一个store对象，整个应用只有一个 store 对象
*/

// 引入 createStore，专门用于创建redux中最为核心的 store 对象
import { createStore, applyMiddleware } from "redux";

// 引入为 Count 组件服务的 reducer
import countReducer from "./count_reducer";

// 引入中间件 thunk，使 store 能够接收函数
import thunk from 'redux-thunk';

// 创建一个 store，创建的时候，传入 reducer，然后对外默认暴露
// export default createStore(countReducer);
// 兼容异步 action，加载支持异步 action 的中间件 thunk
export default createStore(countReducer, applyMiddleware(thunk));