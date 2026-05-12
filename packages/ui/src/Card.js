import React from "react";
export function Card({ children, style, ...props }) {
    return (<div style={{
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            backgroundColor: "white",
            ...style
        }} {...props}>
      {children}
    </div>);
}
