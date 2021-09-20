## Redux Tutorial

### `Install Redux Toolkit and React-Redux`
`npm install @reduxjs/toolkit react-redux`

### `Redux 是一个管理全局应用状态的库`
Redux 通常与 React-Redux 库一起使用，把 Redux 和 React 集成在一起
Redux Toolkit 是编写 Redux 逻辑的推荐方式

### `Redux 使用 "单向数据流"`
State 描述了应用程序在某个时间点的状态，UI 基于该状态渲染
当应用程序中发生某些事情时：
UI dispatch 一个 action
store 调用 reducer，随后根据发生的事情来更新 state
store 通知 UI state 发生了变化
UI 基于新 state 重新渲染

### `Redux 有这几种类型的代码`
Action 是有 type 字段的纯对象，描述发生了什么
Reducer 是纯函数，基于先前的 state 和 action 来计算新的 state
每当 dispatch 一个 action 后，store 就会调用 root reducer

### `Redux is a library for managing global application state`
Redux is typically used with the React-Redux library for integrating Redux and React together
Redux Toolkit is the recommended way to write Redux logic

### `Redux uses a "one-way data flow" app structure`
State describes the condition of the app at a point in time, and UI renders based on that state
When something happens in the app:
The UI dispatches an action
The store runs the reducers, and the state is updated based on what occurred
The store notifies the UI that the state has changed
The UI re-renders based on the new state

### `Redux uses several types of code`
Actions are plain objects with a type field, and describe "what happened" in the app
Reducers are functions that calculate a new state value based on previous state + an action
A Redux store runs the root reducer whenever an action is dispatched


Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
