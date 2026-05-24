type ButtonProps = { 
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg",

    secondary:
      "bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}