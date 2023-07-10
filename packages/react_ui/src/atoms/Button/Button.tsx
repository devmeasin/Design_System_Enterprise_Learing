import React from 'react';
import "@ds.e/scss/lib/Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ title, children, onClick }) => {
  return (
    <button className='btn btn-primary' title={title} onClick={onClick}> { children } </button>
  )
}

export default Button;