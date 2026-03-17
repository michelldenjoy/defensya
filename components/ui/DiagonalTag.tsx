interface DiagonalTagProps {
    children: React.ReactNode;
    variant?: "solid" | "outline";
    className?: string;
  }
  
  export function DiagonalTag({
    children,
    variant = "solid",
    className = "",
  }: DiagonalTagProps) {
    const variants = {
      solid: "bg-defensya-blue text-white border-transparent",
      outline:
        "bg-transparent text-defensya-blue border border-defensya-blue",
    };
  
    return (
      <div
        className={`
          inline-flex items-center justify-center
          px-9 py-2
          text-[10px] font-mono uppercase tracking-[0.35em]
          ${variants[variant]}
          ${className}
        `}
        style={{
          clipPath: "polygon(10% 0, 100% 0, 85% 100%, 0% 100%)",
        }}
      >
        {children}
      </div>
    );
  }