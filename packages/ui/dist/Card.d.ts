import React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function Card({ children, style, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
