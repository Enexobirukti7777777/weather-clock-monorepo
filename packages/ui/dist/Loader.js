import { jsx as _jsx } from "react/jsx-runtime";
export function Loader({ size = 24, color = "#007bff", style, ...props }) {
    return (_jsx("div", { style: {
            display: "inline-block",
            width: size,
            height: size,
            border: `3px solid rgba(0,0,0,0.1)`,
            borderRadius: "50%",
            borderTopColor: color,
            animation: "spin 1s ease-in-out infinite",
            ...style
        }, ...props, children: _jsx("style", { children: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      ` }) }));
}
