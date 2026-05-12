import React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "danger";
}
export declare function Badge({ children, variant, style, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
