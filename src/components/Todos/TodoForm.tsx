import style from './TodoForm.module.css';
import React, { useState } from 'react';
import Button from '../UI/Button';

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
      <Button title="" disabled={false}>
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
