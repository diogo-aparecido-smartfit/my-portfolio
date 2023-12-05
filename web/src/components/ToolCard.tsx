"use client";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { ReactNode } from "react";

interface ToolCardProps {
  icon: ReactNode;
  technology: string;
  tag: string;
  className?: string;
}

export default function ToolCard({
  icon,
  tag,
  technology,
  className,
}: ToolCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 items-center w-full min-w-fit rounded-xl bg-zinc-900 p-8  ${className}`}
    >
      <div className="flex flex-col w-full h-full items-center">
        <span className="flex p-6 w-fit text-5xl rounded-xl bg-zinc-800 mt-6">
          {icon}
        </span>
        <div className="flex w-full items-center justify-center mt-6 gap-2">
          <h1 className="font-semibold">{technology}</h1>
        </div>
      </div>
    </div>
  );
}
