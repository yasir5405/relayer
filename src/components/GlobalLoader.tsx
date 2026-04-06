import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlobalLoaderProps {
  isLoading: boolean;
  message?: string;
}

const GlobalLoader = ({ isLoading, message }: GlobalLoaderProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
  }, [isLoading]);

  if (!isLoading && !visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-9999 flex flex-col items-center justify-center transition-opacity duration-300",
        isLoading ? "opacity-100" : "opacity-0",
      )}
      style={{ background: "rgba(8, 8, 8, 0.65)", backdropFilter: "blur(2px)" }}
      aria-live="assertive"
      aria-busy={isLoading}
      role="status"
    >
      <div className="relative flex items-center justify-center">
        <svg
          className="size-12 animate-spin"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="rgba(34,197,94,0.15)"
            strokeWidth="4"
          />
          <path
            d="M44 24a20 20 0 0 0-20-20"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {message && (
        <p
          className="mt-5 text-sm font-medium tracking-wide"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default GlobalLoader;
