const Logo = ({ size }: { size: "xs" | "sm" | "md" | "lg" }) => {
  const configs = {
    xs: { box: 20 },
    sm: { box: 28 },
    md: { box: 52 },
    lg: { box: 80 },
  };

  const c = configs[size];
  const half = c.box / 2;
  const scale = (c.box * 0.58) / 116;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={c.box}
      height={c.box}
      viewBox={`0 0 ${c.box} ${c.box}`}
      role="img"
      style={{ display: "block", flexShrink: 0 }}
    >
      <g transform={`translate(${half}, ${half}) rotate(45) scale(${scale})`}>
        {/* Half circle */}
        <path
          d="M-14,-58 A58,58 0 0,0 -14,58 L-14,-58 Z"
          fill="oklch(0.5676 0.2021 283.08)"
        />
        {/* Bar */}
        <rect
          x="-8"
          y="-58"
          width="16"
          height="116"
          rx="3"
          fill="oklch(0.5676 0.2021 283.08)"
        />
        {/* Triangle pointing right */}
        <polygon
          points="14,-58 14,58 72,0"
          fill="oklch(0.5676 0.2021 283.08)"
        />
      </g>
    </svg>
  );
};

export default Logo;
