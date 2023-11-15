import Todo from './Todo';
import React from 'react';
import style from './TodoList.module.css';
import { TodoItem } from '../../App';

interface TodoListProps {
  addTodo: TodoItem[];
  deleteTodo: (id: string) => void;
  isCompleted: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  addTodo,
  deleteTodo,
  isCompleted,
}) => {
  return (
    <div className={style.todoList}>
      {addTodo.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          isCompleted={isCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
