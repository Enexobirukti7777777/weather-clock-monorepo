import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, style, ...props }: ButtonProps) {
  return (
    <button
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
}
