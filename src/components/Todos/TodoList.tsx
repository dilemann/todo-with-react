import Todo from './Todo';
import React from 'react';
import style from './TodoList.module.css';
import { TodoItem } from '../../App';

interface TodoListProps {
  addTodo: TodoItem[];
}

const TodoList: React.FC<TodoListProps> = ({ addTodo }) => {
  return (
    <div className={style.todoList}>
      {addTodo.map((todo) => (
        <Todo key={todo.id} todo={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
