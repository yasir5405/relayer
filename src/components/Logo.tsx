const Logo = ({ size }: { size: "xs" | "sm" | "md" | "lg" }) => {
  const configs = {
    xs: { widths: [23, 17, 11], h: 5, gap: 2, r: 1.5 },
    sm: { widths: [37, 27, 17], h: 7, gap: 3, r: 2 },
    md: { widths: [58, 42, 26], h: 11, gap: 5, r: 3 },
    lg: { widths: [96, 70, 44], h: 18, gap: 7, r: 6 },
  };

  const opacities = [1, 0.65, 0.3];
  const c = configs[size];
  const totalH = c.h * 3 + c.gap * 2;

  return (
    <svg
      viewBox={`0 0 ${c.widths[0]} ${totalH}`}
      width={c.widths[0]}
      height={totalH}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
    >
      {c.widths.map((w, i) => (
        <rect
          key={i}
          x={0}
          y={i * (c.h + c.gap)}
          width={w}
          height={c.h}
          rx={c.r}
          fill="currentColor"
          opacity={opacities[i]}
        />
      ))}
    </svg>
  );
};

export default Logo;
