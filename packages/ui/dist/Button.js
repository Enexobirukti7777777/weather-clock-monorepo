import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ children, style, ...props }) {
    return (_jsx("button", { style: {
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            ...style
        }, ...props, children: children }));
}
