import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section
      className={`flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52 overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}
