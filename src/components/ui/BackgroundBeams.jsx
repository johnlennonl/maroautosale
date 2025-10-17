import React from "react";
import { motion } from "framer-motion";
import { cn } from "./cn";

export const BackgroundBeams = ({ className }) => {
  const [interactive, setInteractive] = React.useState(false);

  const id = React.useId();

  return (
    <div
      className={cn(
        "h-screen w-full relative antialiased",
        className
      )}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={id}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -18"
            />
          </filter>
        </defs>
        <g filter={`url(#${id})`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="beams-animation"
            style={{
              background: `linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)`,
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        </g>
      </svg>
    </div>
  );
};