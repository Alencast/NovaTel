type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  rounded?: "full" | "lg" | "md" | "none";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  rounded = "full",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "font-medium transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
   primary:
  "bg-gradient-to-b from-[#0035C5] to-[#002896] text-white shadow-md hover:shadow-lg hover:brightness-110",

    secondary:
      "bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200",
  };

  const roundedStyles = {
    full: "rounded-full",
    lg: "rounded-xl",
    md: "rounded-md",
    none: "rounded-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${roundedStyles[rounded]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}