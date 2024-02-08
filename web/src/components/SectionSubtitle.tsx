interface SectionSubtitleProps {
  title: string;
  className?: string;
}

export default function SectionSubtitle({
  title,
  className,
}: SectionSubtitleProps) {
  return (
    <h1 className={`font-semibold text-2xl sm:text-3xl ${className}`}>
      {title}
    </h1>
  );
}
