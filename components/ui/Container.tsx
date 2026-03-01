import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  style = {},
}: ContainerProps) {
  return (
    <Component
      className={className}
      style={{
        width: "100%",
        maxWidth: "var(--container-max)",
        marginInline: "auto",
        paddingInline: "var(--container-padding)",
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
