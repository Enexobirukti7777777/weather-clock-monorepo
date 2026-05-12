import React from "react";
export function Input({ label, style, ...props }) {
    return (<div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "12px" }}>
      {label && <label style={{ fontSize: "14px", fontWeight: "bold" }}>{label}</label>}
      <input style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
            ...style
        }} {...props}/>
    </div>);
}
