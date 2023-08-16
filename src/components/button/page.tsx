'use client'
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-700',
  };

  return (
    <button
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
