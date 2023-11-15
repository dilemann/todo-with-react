import style from './Todo.module.css';
import { TodoItem } from '../../App';

import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

interface TodoProps {
  todo: {
    id: string;
    text: string;
  };
  deleteTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <div className={style.container}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.text}>{todo.text}</div>
      <RiDeleteBin2Line
        className={style.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className={style.acceptIcon} />
    </div>
  );
};

export default Todo;
