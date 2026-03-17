import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variants = {
    primary: {
      base: "bg-defensya-blue text-white border-none",
      hover: "bg-blue-600",
    },
    secondary: {
      base: "bg-gray-100 text-gray-900 border-none",
      hover: "bg-gray-200",
    },
    outline: {
      base: "bg-transparent text-defensya-blue border border-defensya-blue",
      hover: "bg-defensya-blue text-white",
    },
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 font-mono tracking-wide uppercase
    overflow-hidden rounded-md border transition-all duration-500
    clip-path-diagonal ${sizes[size]} ${variants[variant].base} ${className}
  `;

  const content = (
    <>
      <div
        className={`
          absolute inset-0 clip-path-diagonal bg-white/10 transition-transform duration-500
          transform -translate-x-full group-hover:translate-x-0
        `}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${baseClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`group ${baseClasses}`}>
      {content}
    </button>
  );
}