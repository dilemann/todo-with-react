import style from './Todo.module.css';
import { TodoItem } from '../../App';

import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

interface TodoProps {
  todo: {
    id: string;
    text: string;
    isCompleted: boolean;
  };
  deleteTodo: (id: string) => void;
  isCompleted: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, isCompleted }) => {
  return (
    <div
      className={
        todo.isCompleted
          ? `${style.container} ${style.completedTodo}`
          : style.container
      }
    >
      <RiTodoFill className={style.todoIcon} />
      <div className={style.text}>{todo.text}</div>
      <RiDeleteBin2Line
        className={style.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={style.acceptIcon}
        onClick={() => isCompleted(todo.id)}
      />
    </div>
  );
};

export default Todo;
