import Markdown from "react-markdown";

interface TextProps {
  children: string;
  type: "phrase" | "paragraph";
}

export default function Text({ children, type }: TextProps) {
  if (type === "phrase") {
    return (
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-1">
        <Markdown className="reactMarkDown">{children}</Markdown>
      </h1>
    );
  }

  if (type === "paragraph") {
    return (
      <p className="text-zinc-500 text-base sm:text-lg">
        <Markdown className="reactMarkDown">{children}</Markdown>
      </p>
    );
  }

  return null;
}
