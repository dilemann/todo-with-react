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
  disabled = false,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={style.button}
      title={title}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
