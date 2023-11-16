import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={style.button}
      title={title}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
