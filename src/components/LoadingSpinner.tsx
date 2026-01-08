import React from "react";

type LoadingSpinnerProps = {
  size?: number;        // px
  color?: string;       // any CSS color
  thickness?: number;   // px (grosimea liniuței)
  segments?: number;    // câte liniuțe
  speed?: number;       // secunde / rotație
  className?: string;
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 96,
  color = "white",
  thickness = 6,
  segments = 12,
  speed = 0.9,
  className = "",
}) => {
  const tickLength = Math.max(10, Math.round(size * 0.18));
  const radius = Math.round(size / 2 - tickLength / 2);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    >
      {/* grupul care se rotește */}
      <div
        className="absolute inset-0 motion-reduce:animate-none"
        style={{
          animation: `spin ${speed}s linear infinite`,
        }}
      >
        {Array.from({ length: segments }).map((_, i) => {
          // fade “tail” ca în exemplu
          const opacity = (i + 1) / segments; // 0..1
          const angle = (360 / segments) * i;

          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                width: thickness,
                height: tickLength,
                background: color,
                borderRadius: thickness,
                opacity,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            />
          );
        })}
      </div>

      {/* fallback pentru keyframes spin dacă nu ai deja */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
