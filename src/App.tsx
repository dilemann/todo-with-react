import React from 'react';
import style from './App.module.css';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  return (
    <div className={style.App}>
      <h1 className={style.title}> ToDo App</h1>
      <TodoForm />
    </div>
  );
}

export default App;
