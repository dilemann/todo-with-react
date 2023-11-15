import React, { useState } from 'react';
import style from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';

export type TodoItem = {
  id: string;
  text: string;
  isCompleted: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const getNewTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className={style.App}>
      <h1 className={style.title}> ToDo App</h1>
      <TodoForm getTodoHandler={getNewTodo} />
      <TodoList addTodo={todos} />
    </div>
  );
};

export default App;
