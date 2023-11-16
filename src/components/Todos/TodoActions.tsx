import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button';
import style from './TodoActions.module.css';

interface ToDoActionProps {
  resetTodos: () => void;
  deleteCompleted: () => void;
  countCompletedTodos: number;
}

const TodoActions: React.FC<ToDoActionProps> = ({
  resetTodos,
  deleteCompleted,
  countCompletedTodos,
}) => {
  console.log('countCompletedTodos:', countCompletedTodos);
  return (
    <div className={style.container}>
      <Button title="Reset all Todos" onClick={resetTodos}>
        <RiRefreshLine className={style.icon} />
      </Button>
      <Button
        title="Delete Completed Todos"
        disabled={!countCompletedTodos}
        onClick={deleteCompleted}
      >
        <RiDeleteBin2Line className={style.icon} />
      </Button>
    </div>
  );
};

export default TodoActions;
