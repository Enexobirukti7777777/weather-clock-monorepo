import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Input({ label, style, ...props }) {
    return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px", marginBottom: "12px" }, children: [label && _jsx("label", { style: { fontSize: "14px", fontWeight: "bold" }, children: label }), _jsx("input", { style: {
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    outline: "none",
                    ...style
                }, ...props })] }));
}
