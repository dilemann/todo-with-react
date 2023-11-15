import React, { useState } from 'react';
import style from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

type TodoItem = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const App: React.FC = () => {
  const [todo, setTodo] = useState<TodoItem[]>([]);

  const getNewTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: 1,
      text: text,
      isCompleted: false,
    };

    setTodo([...todo, newTodo]);
    console.log(newTodo);
  };

  return (
    <div className={style.App}>
      <h1 className={style.title}> ToDo App</h1>
      <TodoForm getTodoHandler={getNewTodo} />
      <TodoList />
    </div>
  );
};

export default App;
