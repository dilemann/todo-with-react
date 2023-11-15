import React, { useState } from 'react';
import style from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import TodoActions from './components/Todos/TodoActions';

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

  const deleteTodo = (id: string) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const isCompletedTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const countCompletedTodos = () => {};

  return (
    <div className={style.App}>
      <h1 className={style.title}> ToDo App</h1>

      <TodoForm getTodoHandler={getNewTodo} />
      <TodoActions resetTodos={resetTodos} />
      <TodoList
        addTodo={todos}
        deleteTodo={deleteTodo}
        isCompleted={isCompletedTodo}
      />
    </div>
  );
};

export default App;
