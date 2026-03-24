const Logo = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };
  return (
    <svg
      className={`${sizeClasses[size]} shrink-0 text-primary`}
      viewBox="44 20 46 80"
      display={"block"}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="
    M44 20
    L44 100
    L60 100
    L60 70

    C76 70, 88 60, 88 46
    C88 32, 76 20, 60 20
    Z

    M60 70
    C72 74, 82 86, 90 100
    L72 100
    C66 90, 60 82, 54 76
    Z
  "
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
