import { ButtonHTMLAttributes } from "react";
import { FiDownloadCloud, FiExternalLink } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  buttonAction: "DOWNLOAD" | "LINK" | "MAIL";
}

export default function Button({
  children,
  className,
  icon,
  buttonAction,
  ...props
}: ButtonProps) {
  const iconButtonType = () => {
    switch (buttonAction) {
      case "MAIL":
        return <MdAlternateEmail />;
      case "DOWNLOAD":
        return <FiDownloadCloud />;
      case "LINK":
        return <FiExternalLink />;
    }
  };

  return (
    <button
      {...props}
      className={`flex items-center rounded-xl bg-darkBg border-[1px] border-darkBorder p-3 w-full hover:brightness-150  justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-200 origin-customTransform text-sm xl:text-base group/edit ${className}`}
    >
      <div className="flex max-w-[16px] overflow-hidden transition-all duration-300 ease-in-out">
        <div className="flex group-hover/edit:-translate-x-7 transition-all duration-700 ease-in-out">
          <span className="mr-3">{icon}</span>
          {iconButtonType()}
        </div>
      </div>
      {children}
    </button>
  );
}
