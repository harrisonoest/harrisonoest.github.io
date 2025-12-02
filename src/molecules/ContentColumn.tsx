import { ReactNode, CSSProperties } from "react";

interface ContentColumnProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function ContentColumn({ children, style }: ContentColumnProps) {
  return (
    <section className="surface" style={{ marginBottom: '2rem', ...style }}>
      {children}
    </section>
  );
}
