import style from './TodoForm.module.css';

function TodoForm() {
  return (
    <form>
      <input type="text" className={style.input} />
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
