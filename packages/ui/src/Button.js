import React from "react";
export function Button({ children, style, ...props }) {
    return (<button style={{
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            ...style
        }} {...props}>
      {children}
    </button>);
}
