  import React, { useReducer, useState, useEffect } from 'react';
  import styled from "styled-components";
import todoReducer from './components/Reducer'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const Div = styled.div`
  color : black;
  background: skyblue;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display : flex;
  flex-direction: column;
  align-items: center;
`
const H1 = styled.h1`

`
// 전체 애플리케이션을 관리하는 부모 컴포넌트
const App = () => {
  // useReducer를 사용하여 상태와 액션을 관리
  const [todos, dispatch] = useReducer(todoReducer, []);

  // 새로운 투두 추가 액션을 호출하는 함수
  const addTodo = text => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  // 특정 투두 삭제 액션을 호출하는 함수
  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <Div>
      <H1>Todo App</H1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </Div>
  );
};

export default App;

