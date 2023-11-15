import style from './Todo.module.css';
import { TodoItem } from '../../App';

interface TodoProps {
  todo: string;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div>
      <div className={style.todo}>{todo}</div>
    </div>
  );
};

export default Todo;
