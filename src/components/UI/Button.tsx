import style from './Button.module.css';

interface ButtonProps {
  title: string;
  disabled: boolean;
  children: string;
}

const Button = (props: ButtonProps) => {
  const { title, disabled = false, children } = props;
  return (
    <>
      <button
        {...props}
        className={style.button}
        title={title}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
