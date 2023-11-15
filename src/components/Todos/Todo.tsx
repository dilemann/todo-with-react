import style from './Todo.module.css';
import { TodoItem } from '../../App';
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

interface TodoProps {
  todo: string;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div className={style.container}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.text}>{todo}</div>
      <RiDeleteBin2Line className={style.deleteIcon} />
      <FaCheck className={style.acceptIcon} />
    </div>
  );
};

export default Todo;
