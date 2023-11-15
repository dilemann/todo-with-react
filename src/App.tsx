import React from 'react';
import style from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  return (
    <div className={style.App}>
      <h1 className={style.title}> ToDo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
