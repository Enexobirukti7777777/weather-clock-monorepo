import React from "react";
export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number;
    color?: string;
}
export declare function Loader({ size, color, style, ...props }: LoaderProps): import("react/jsx-runtime").JSX.Element;
