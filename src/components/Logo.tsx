const Logo = ({ size }: { size: "xs" | "sm" | "md" | "lg" }) => {
  const configs = {
    xs: { box: 24 },
    sm: { box: 36 },
    md: { box: 52 },
    lg: { box: 80 },
  };

  const c = configs[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={c.box}
      height={c.box}
      viewBox="0 0 80 80"
      role="img"
      style={{ display: "block", flexShrink: 0 }}
    >
      <rect x="0" y="0" width="80" height="80" rx="20" fill="#0F6E56" />
      <path
        d="M36,22 C36,16 41,12 47,12 C53,12 58,16 58,22 C58,28 53,32 40,36 C27,40 22,44 22,51 C22,57 27,62 34,62 C41,62 46,57 46,51"
        fill="none"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
