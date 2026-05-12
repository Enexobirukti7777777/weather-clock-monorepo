import React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
export declare function Input({ label, style, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
