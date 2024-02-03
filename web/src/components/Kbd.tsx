import React, { Children, HTMLAttributes } from "react";

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export default function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={`${className} px-2 py-[2px] rounded-lg font-bold border-2 border-zinc-700`}
    >
      {children}
    </kbd>
  );
}
