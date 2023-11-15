import style from './TodoForm.module.css';
import React, { useState } from 'react';

interface TodoFormProps {
  getTodoHandler: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ getTodoHandler }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTodoHandler(text);
    setText(text);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form className={style.container} onSubmit={onSubmitHandler}>
      <input
        type="text"
        // value={text}
        className={style.input}
        onChange={onChangeHandler}
      />
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
