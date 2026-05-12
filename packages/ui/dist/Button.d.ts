import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
export declare function Button({ children, style, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
