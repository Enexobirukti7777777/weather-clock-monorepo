import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
}

export function Badge({ children, variant = "primary", style, ...props }: BadgeProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary": return "#007bff";
      case "secondary": return "#6c757d";
      case "success": return "#28a745";
      case "danger": return "#dc3545";
      default: return "#007bff";
    }
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 8px",
        fontSize: "12px",
        fontWeight: "bold",
        lineHeight: 1,
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        borderRadius: "12px",
        backgroundColor: getBackgroundColor(),
        ...style
      }}
      {...props}
    >
      {children}
    </span>
  );
}
