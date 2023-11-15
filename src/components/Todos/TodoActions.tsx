import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button';
import style from './TodoActions.module.css';

interface ToDoActionProps {
  resetTodos: () => void;
}

const TodoActions: React.FC<ToDoActionProps> = ({ resetTodos }) => {
  return (
    <div className={style.container}>
      <Button title="Reset all Todos" disabled={false} onClick={resetTodos}>
        <RiRefreshLine className={style.icon} />
      </Button>
      <Button title="Delete Completed Todos" disabled={false}>
        <RiDeleteBin2Line className={style.icon} />
      </Button>
    </div>
  );
};

export default TodoActions;
