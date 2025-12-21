import type { PropsWithChildren, ReactNode } from "react";

// inheriting the type
interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

export function NewCard({title, children, footer}: CardProps) { // children is compulsary. Because CardProps extends PropsWithChildren
  return (
    <>
      <div>Card</div>
      <h3>{title}</h3>
      <p>{children}</p>
      {footer && <footer>{footer}</footer>}
    {}
    </>
  );
}
