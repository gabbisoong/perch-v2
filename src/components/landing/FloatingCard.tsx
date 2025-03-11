import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  author: string;
  position: "left" | "right";
  offset: number;
  className?: string;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  title,
  subtitle,
  author,
  position,
  offset,
  className = "",
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200 + offset]);
  const opacity = useTransform(scrollY, [100, 400], [1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={`absolute ${position === "left" ? "-left-64" : "-right-64"} 
        bg-white shadow-[8px_8px_36px_4px_rgba(0,0,0,0.08)] 
        rounded-xl p-4 w-64 ${className}`}
    >
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0" />
        <div className="flex-grow">
          <p className="text-sm font-medium">{author}</p>
          <h3 className="text-base font-semibold mt-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{subtitle}</p>
        </div>
        <button className="w-6 h-6 flex-shrink-0">⋯</button>
      </div>
    </motion.div>
  );
};
