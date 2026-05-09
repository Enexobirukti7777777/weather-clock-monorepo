import React from "react";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

export function Loader({ size = 24, color = "#007bff", style, ...props }: LoaderProps) {
  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
        border: `3px solid rgba(0,0,0,0.1)`,
        borderRadius: "50%",
        borderTopColor: color,
        animation: "spin 1s ease-in-out infinite",
        ...style
      }}
      {...props}
    >
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
