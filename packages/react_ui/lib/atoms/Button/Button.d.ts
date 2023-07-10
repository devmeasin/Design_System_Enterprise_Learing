import React from 'react';
import "@ds.e/scss/lib/Button.css";
interface ButtonProps {
    title: string;
    onClick: () => void;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
